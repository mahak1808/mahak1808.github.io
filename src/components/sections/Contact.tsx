import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <BentoCard
          tone="primary"
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center"
        >
          <div className="flex flex-col gap-4 lg:flex-1">
            <span className="font-mono text-xs uppercase tracking-wider text-on-primary-container/70 font-semibold">
              Have an app idea?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-on-primary-container leading-tight">
              Your idea. One app.
              <br />
              From concept to production.
            </h2>
            <p className="font-body text-base text-on-primary-container/85 max-w-md">
              I build cross-platform mobile applications with React Native -
              from UI and API integration to testing and deployment.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface border-2 border-on-surface font-body text-sm font-semibold hover:scale-[1.03] active:scale-95 transition-transform"
            >
              <Icon name="chat" size={20} />
              Chat on WhatsApp instead
            </a>
          </div>

          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4 lg:flex-1 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-on-surface bg-surface-container-lowest font-body text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-on-surface bg-surface-container-lowest font-body text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Tell me about your app idea"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-on-surface bg-surface-container-lowest font-body text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none resize-none"
            />
            <Button
              type="submit"
              variant="secondary"
              className="w-full justify-center"
            >
              Let&apos;s build it
            </Button>
          </form>
        </BentoCard>
      </Container>
    </section>
  );
}
