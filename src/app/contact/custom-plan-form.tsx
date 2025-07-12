
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitCustomPlan } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { servicesList } from '@/lib/services-list';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { z } from 'zod';

const customPlanFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  services: z.array(z.string()).min(1, 'You must select at least one service.'),
});

const initialState = {
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          Submit & Book Your Call <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}

export function CustomPlanForm() {
  const [state, formAction] = useActionState(submitCustomPlan, initialState);

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-6 bg-card p-8 rounded-lg border">
        <h3 className="text-2xl font-bold">Your Details</h3>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="e.g., Alex Hormozi" />
          {state.errors?.name && (
            <p className="text-sm font-medium text-destructive">
              {state.errors.name[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g., alex@acquisition.com"
          />
          {state.errors?.email && (
            <p className="text-sm font-medium text-destructive">
              {state.errors.email[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="e.g., +1 555-123-4567"
          />
           {state.errors?.phone && (
            <p className="text-sm font-medium text-destructive">
              {state.errors.phone[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-6 bg-card p-8 rounded-lg border">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">
            Select Your Required Services
          </h3>
          <p className="text-muted-foreground">
            Choose all that apply. We'll discuss the perfect combination on
            our call.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesList.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-secondary/50 transition-colors"
            >
              <Checkbox
                id={`service-${item.id}`}
                name="services"
                value={item.id}
              />
              <Label
                htmlFor={`service-${item.id}`}
                className="font-normal text-white/90"
              >
                {item.label}
              </Label>
            </div>
          ))}
        </div>
        {state.errors?.services && (
          <p className="text-sm font-medium text-destructive">
            {state.errors.services[0]}
          </p>
        )}
      </div>

      <SubmitButton />
       {state.errors?._form && (
        <p className="text-sm font-medium text-destructive text-center mt-4">
          {state.errors._form}
        </p>
      )}
    </form>
  );
}
