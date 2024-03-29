import ContactSection from "@/components/contact-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export default function Page() {
  return (
    <ContactSection>
      <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight md:mb-8">
        Contact
      </h1>
      <div className="flex flex-wrap items-baseline justify-between gap-3 md:flex-nowrap">
        <Card className="md:max-w-[20rem]">
          <CardHeader>
            <CardTitle>&gt;_ Let&apos;s Connect</CardTitle>
            <CardDescription>
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full shadow-md md:max-w-[55rem]">
          <CardContent className="p-5">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </ContactSection>
  );
}
