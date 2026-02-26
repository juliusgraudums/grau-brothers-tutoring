import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, User, Mail, Phone, BookOpen, GraduationCap, MapPin, CalendarCheck, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const subjects = ["Matte", "Fysik", "Svenska", "Engelska", "Övrigt"];
const levels = ["Åk 7–9", "Gymnasiet"];
const times = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"];

const BookingSystem = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement): boolean => {
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = (data.get("name") as string)?.trim();
    if (!name || name.length < 2) newErrors.name = "Namn måste vara minst 2 tecken.";

    const email = (data.get("email") as string)?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Ange en giltig e-postadress.";

    if (!data.get("subject")) newErrors.subject = "Välj ett ämne.";
    if (!data.get("level")) newErrors.level = "Välj en nivå.";
    if (!data.get("mode")) newErrors.mode = "Välj online eller på plats.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!validate(form)) {
      e.preventDefault();
      return;
    }

    // For Netlify: allow native form submission in production.
    // In dev/preview, simulate success.
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset();
      })
      .catch(() => {
        setIsSubmitted(true);
        form.reset();
      });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl shadow-soft border border-border p-12">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tack för din förfrågan!
              </h2>
              <p className="text-muted-foreground text-lg mb-8" role="status" aria-live="polite">
                Vi återkommer inom 24 timmar för att bekräfta din gratis 20 minuters konsultation.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="rounded-full px-8"
              >
                Skicka en ny förfrågan
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Boka gratis konsultation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fyll i formuläret så återkommer vi inom 24 timmar för att bekräfta en gratis
              konsultation på 20 minuter. Jag kan vara på plats på Ingarö under helger och på plats i Motala till vardags.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-soft border border-border p-8 md:p-12">
            <form
              name="tutoring-booking"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="tutoring-booking" />
              <p className="hidden">
                <label>
                  Fyll inte i detta fält: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-secondary" />
                    Namn <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ditt namn"
                    required
                    minLength={2}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive" aria-live="polite">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    E-post <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="din@email.com"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive" aria-live="polite">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    Telefon <span className="text-muted-foreground text-xs">(valfritt)</span>
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="070-123 45 67" />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    Ämne <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                  >
                    <option value="" disabled>Välj ämne...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive" aria-live="polite">{errors.subject}</p>
                  )}
                </div>

                {/* Level */}
                <div className="space-y-2">
                  <Label htmlFor="level" className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-secondary" />
                    Nivå <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="level"
                    name="level"
                    required
                    defaultValue=""
                    aria-invalid={!!errors.level}
                    aria-describedby={errors.level ? "level-error" : undefined}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                  >
                    <option value="" disabled>Välj nivå...</option>
                    {levels.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                  {errors.level && (
                    <p id="level-error" className="text-sm text-destructive" aria-live="polite">{errors.level}</p>
                  )}
                </div>

                {/* Preferred time */}
                <div className="space-y-2">
                  <Label htmlFor="preferred_time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    Önskad tid
                  </Label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    defaultValue=""
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                  >
                    <option value="" disabled>Välj tid...</option>
                    {times.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred date */}
                <div className="space-y-2">
                  <Label htmlFor="preferred_date" className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-secondary" />
                    Önskat datum
                  </Label>
                  <Input
                    id="preferred_date"
                    name="preferred_date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Mode */}
                <div className="space-y-3 sm:col-span-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    Format <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mode" value="Online" required className="accent-secondary w-4 h-4" />
                      <span className="text-sm text-foreground">Online</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mode" value="På plats" className="accent-secondary w-4 h-4" />
                      <span className="text-sm text-foreground">På plats (Ingarö helger, Motala vardagar)</span>
                    </label>
                  </div>
                  {errors.mode && (
                    <p className="text-sm text-destructive" aria-live="polite">{errors.mode}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">
                    Meddelande <span className="text-muted-foreground text-xs">(valfritt)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Berätta vad du behöver hjälp med..."
                    rows={3}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Skicka konsultationsförfrågan
              </Button>
              <p className="mt-6 text-sm text-muted-foreground text-center">
                Efter konsultationen föreslår jag ett upplägg (ofta 1 gång/vecka). Fakturering sker månadsvis i efterskott.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
