import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export default function ContactContent() {
  return (
    <>
      <Card className="md:max-w-[20rem]">
        <CardHeader>
          <CardTitle>&gt;_ Let&apos;s Connect</CardTitle>
          <CardDescription>
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full md:max-w-[55rem] shadow-md">
        <CardContent className="p-5">
          <ContactForm />
        </CardContent>
      </Card>
    </>
  );
}
