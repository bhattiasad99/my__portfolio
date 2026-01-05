import Pill from "@/components/ui/Pill";
import SectionIntro from "@/components/ui/SectionIntro";
import ContactForm from "@/components/home/ContactForm";
import { DATA } from "@/constants/content";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mt-16 overflow-hidden rounded-[2.5rem] border border-border bg-grad-midnight p-6 shadow-2xl sm:mt-20 sm:p-8 md:p-14"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Contact Us"
            title="Simple, calm, and quick to reply"
            description="One line is enough. Tell me where you are, what you need, and when you want to start."
            className="space-y-3"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
                Office
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {DATA.office}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
                Response Time
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {DATA.responseTime}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
              Call Window
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {DATA.callWindow}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
            <Pill className="border border-border bg-card/80 px-4 py-2">
              Remote First
            </Pill>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
