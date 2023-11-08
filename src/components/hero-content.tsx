import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HeroContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>&gt;_ Let&apos;s Connect</CardTitle>
        <CardDescription>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
