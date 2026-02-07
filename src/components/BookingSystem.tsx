import { useState } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { sv } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, CalendarCheck, User, Mail, BookOpen, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface TimeSlot {
  id: string;
  date: Date;
  time: string;
  subject?: string;
  isBooked: boolean;
}

// Demo data - i en riktig app skulle detta komma från en databas
const generateDemoSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = ["10:00", "11:00", "14:00", "15:00", "16:00"];
  
  for (let i = 1; i <= 14; i++) {
    const date = addDays(new Date(), i);
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;
    
    times.forEach((time, idx) => {
      // Randomly mark some as booked for demo
      const isBooked = Math.random() > 0.7;
      slots.push({
        id: `slot-${i}-${idx}`,
        date,
        time,
        isBooked,
      });
    });
  }
  return slots;
};

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [slots] = useState<TimeSlot[]>(generateDemoSlots());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const availableDates = [...new Set(
    slots.filter(s => !s.isBooked).map(s => s.date.toDateString())
  )].map(d => new Date(d));

  const slotsForSelectedDate = selectedDate
    ? slots.filter(s => isSameDay(s.date, selectedDate))
    : [];

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.isBooked) return;
    setSelectedSlot(slot);
    setIsDialogOpen(true);
    setIsConfirmed(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    setIsConfirmed(true);
    toast.success("Bokning bekräftad!", {
      description: `Din läxhjälp är bokad ${format(selectedSlot!.date, "d MMMM", { locale: sv })} kl ${selectedSlot!.time}`,
    });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSelectedSlot(null);
    setIsConfirmed(false);
  };

  return (
    <section id="booking" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Boka läxhjälp
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Välj en tid som passar dig. Alla sessioner är 60 minuter och kan genomföras 
              online eller på plats.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <div className="bg-card rounded-3xl shadow-soft border border-border p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <CalendarCheck className="w-6 h-6 text-secondary" />
                Välj datum
              </h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => {
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                  const hasSlots = availableDates.some(d => isSameDay(d, date));
                  return isWeekend || isPast || !hasSlots;
                }}
                modifiers={{
                  available: availableDates,
                }}
                modifiersClassNames={{
                  available: "bg-secondary/10 text-secondary font-semibold",
                }}
                className={cn("p-3 pointer-events-auto rounded-xl")}
                locale={sv}
              />
            </div>

            {/* Time slots */}
            <div className="bg-card rounded-3xl shadow-soft border border-border p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-secondary" />
                Lediga tider
              </h3>

              {selectedDate ? (
                <div className="space-y-3">
                  <p className="text-muted-foreground mb-4">
                    {format(selectedDate, "EEEE d MMMM", { locale: sv })}
                  </p>
                  {slotsForSelectedDate.length > 0 ? (
                    slotsForSelectedDate.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleSlotClick(slot)}
                        disabled={slot.isBooked}
                        className={cn(
                          "w-full p-4 rounded-xl border text-left transition-all",
                          slot.isBooked
                            ? "bg-muted border-border text-muted-foreground cursor-not-allowed"
                            : "bg-background border-border hover:border-secondary hover:shadow-soft cursor-pointer"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-secondary" />
                            <span className="font-medium text-foreground">{slot.time}</span>
                          </div>
                          {slot.isBooked ? (
                            <span className="text-sm text-muted-foreground">Bokad</span>
                          ) : (
                            <span className="text-sm text-secondary font-medium">Tillgänglig</span>
                          )}
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Inga tider tillgängliga detta datum
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CalendarCheck className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Välj ett datum i kalendern för att se lediga tider
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (!open) resetForm();
      }}>
        <DialogContent className="sm:max-w-md">
          {!isConfirmed ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">Boka läxhjälp</DialogTitle>
                <DialogDescription>
                  {selectedSlot && (
                    <span className="text-secondary font-medium">
                      {format(selectedSlot.date, "EEEE d MMMM", { locale: sv })} kl {selectedSlot.time}
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Namn
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ditt namn"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-post
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="din@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Ämne
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="t.ex. Matematik, Fysik"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Meddelande (valfritt)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Berätta vad du behöver hjälp med..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Bekräfta bokning
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <DialogTitle className="font-display text-2xl mb-2">Bokning bekräftad!</DialogTitle>
              <DialogDescription className="mb-4">
                Vi har skickat en bekräftelse till {formData.email}
              </DialogDescription>
              <Button onClick={() => setIsDialogOpen(false)} variant="outline">
                Stäng
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSystem;
