"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RotateCw } from "lucide-react";
import sendMail from "@/actions/send-mail";

const formSchema = z.object({
    mail: z.string().email().min(1),
    subject: z.string().min(1).max(100),
    message: z.string().min(10).max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mail: "",
            message: "",
            subject: "",
        },
    });
    async function onSubmit(values: FormValues) {
        try {
            await sendMail(values);
            form.reset();
            toast({
                description: "✅ Your message has been sent.",
            });
        } catch {
            toast({
                variant: "destructive",
                description: "❌ There was a problem with your request.",
            });
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="mail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="mail@example.com" type="email" required {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Just a subject" type="text" required {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={10}
                                    placeholder="Let's talk about..."
                                    required
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.formState.isSubmitting ? (
                    <Button disabled>
                        <RotateCw className="mr-2 size-4 animate-spin" />
                        Sending...
                    </Button>
                ) : (
                    <Button type="submit">Send</Button>
                )}
            </form>
        </Form>
    );
}
