import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  businessType: z.string(),
  employeeCount: z.array(z.number()).transform(([value]) => value),
  hasPhysicalLocation: z.string(),
});

const QuoteEstimator = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: "",
      employeeCount: [1],
      hasPhysicalLocation: "",
    },
  });

  const calculateEstimate = (data: z.infer<typeof formSchema>) => {
    let basePrice = 15000; // Base registration cost
    
    // Add costs based on business type
    switch (data.businessType) {
      case "pvt":
        basePrice += 25000;
        break;
      case "llp":
        basePrice += 15000;
        break;
      case "opc":
        basePrice += 20000;
        break;
    }

    // Add costs based on employee count
    basePrice += data.employeeCount * 2000;

    // Add costs for physical location
    if (data.hasPhysicalLocation === "yes") {
      basePrice += 10000;
    }

    return basePrice;
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const estimate = calculateEstimate(data);
    toast({
      title: "Estimated Cost",
      description: `₹${estimate.toLocaleString('en-IN')}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow section-container">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                Business Setup Cost Estimator
              </CardTitle>
              <CardDescription>
                Get an instant estimate for registering and setting up your business in India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pvt">Private Limited Company</SelectItem>
                            <SelectItem value="llp">Limited Liability Partnership</SelectItem>
                            <SelectItem value="opc">One Person Company</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Number of Employees</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Slider
                              min={1}
                              max={50}
                              step={1}
                              value={[field.value]}
                              onValueChange={field.onChange}
                              className="w-full"
                            />
                            <div className="text-right text-sm text-muted-foreground">
                              {field.value} employees
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasPhysicalLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Physical Business Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Do you need a physical location?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    <IndianRupee className="mr-2 h-4 w-4" />
                    Calculate Estimate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div></main>
      <Footer />
    </div>
  );
};

export default QuoteEstimator;