'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { submitCustomPlan } from './actions';
import { useToast } from '@/hooks/use-toast';
import { servicesList } from '@/lib/services-list';
import { ArrowRight } from 'lucide-react';

const customPlanSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one service.',
  }),
});

export function CustomPlanForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof customPlanSchema>>({
    resolver: zodResolver(customPlanSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      services: [],
    },
  });

  async function onSubmit(data: z.infer<typeof customPlanSchema>) {
    const result = await submitCustomPlan(data);

    if (result.success) {
      router.push('/thank-you');
    } else {
      toast({
        title: 'Submission Failed',
        description: result.error || 'There was a problem with your submission.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 bg-card p-8 rounded-lg border">
          <h3 className="text-2xl font-bold">Your Details</h3>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Alex Hormozi" {...field} />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., alex@acquisition.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., +1 555-123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6 bg-card p-8 rounded-lg border">
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-2xl font-bold">
                    Select Your Required Services
                  </FormLabel>
                  <FormDescription>
                    Choose all that apply. We'll discuss the perfect combination
                    on our call.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesList.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="services"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-secondary/50 transition-colors"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white/90">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            'Processing...'
          ) : (
            <>
              Submit & Book Your Call <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
