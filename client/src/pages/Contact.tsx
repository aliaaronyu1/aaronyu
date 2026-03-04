import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import { insertMessageSchema, type MessageInput } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/layout/FadeIn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { toast } = useToast();
  const createMessage = useCreateMessage();

  const form = useForm<MessageInput>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: MessageInput) => {
    createMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to send message. Please try again.",
        });
      }
    });
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FadeIn delay={0.1}>
          <div className="bg-card/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl h-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-background/50 border-white/10 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          className="bg-background/50 border-white/10 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary transition-all"
                          {...field} 
                        />
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
                      <FormLabel className="text-muted-foreground flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Message
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="bg-background/50 border-white/10 min-h-[160px] rounded-xl focus-visible:ring-primary focus-visible:border-primary transition-all resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={createMessage.isPending}
                  className="w-full h-14 rounded-xl text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {createMessage.isPending ? "Sending..." : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col justify-center gap-8 lg:p-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:hello@aliaaron.com" className="text-primary hover:underline">
              hello@aliaaron.com
            </a>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full my-4" />
          <p className="text-lg leading-relaxed">
            I usually respond within 24 hours. Let's build something amazing together.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
