"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileUp } from "lucide-react";
import Link from "next/link";

const FormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    nim: z.string().min(1, "NIM is required"),
    email: z.string().min(1, "Email is required").email("invalid email!"),
    phone_number: z.string().min(1, "Phone number is required"),
    document: z.string().min(1, "File is required"),
    gender: z.string().min(1, "Gender is required"),
    year_of_enrollment: z.string().min(1, "Year of enrollment is required"),
    faculty: z.string().min(1, "Faculty is required"),
    major: z.string().min(1, "Major is required"),
    class: z.string().min(1, "Class is required"),
    note: z.boolean().refine((value) => value === true, {
      message: "You have to select the checkbox.",
    }),
  })
  .refine((data) => data.note === true, {
    message: "You have to select the checkbox.",
  });

export default function GeneralQuestionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const { note, ...formData } = data;
      const apiFormData = {
        id: 5, // Replace with the appropriate value for your use case
        name: formData.name,
        nim: formData.nim,
        class: formData.class,
        major: formData.major,
        email: formData.email,
        faculty: formData.faculty,
        gender: formData.gender,
        phone_number: formData.phone_number,
        entry_year: formData.year_of_enrollment, // Assuming 'year_of_enrollment' corresponds to 'entry_year'
        document: formData.document,
      };

      // Assuming your API endpoint is something like 'https://your-api-endpoint.com'
      const apiUrl = "https://cyberrecruitment.vercel.app/participant";

      // Send data to the participant endpoint
      const participantResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiFormData),
      });

      if (!participantResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const participantData = await participantResponse.json();
      console.log("Participant API response:", participantData);

      // Send data to the send endpoint
      const sendResponse = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.name,
        }),
      });

      const sendData = await sendResponse.json();
      if (!sendResponse.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Send API response:", sendData);

      window.alert("Your form has been submitted.");
      window.location.href = "/";
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      window.alert("Error submitting form. Please try again.");
    }
  }

  return (
    <div className="min-w-full mt-5 md:mt-7 lg:mt-10 ">
      <div className="flex flex-col gap-2">
        <div className="w-1/2 md:w-56 lg:w-64"></div>
        <div className="flex mx-auto p-3 mb-20 lg:mb-24">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-sm w-full lg:scale-110"
            >
              <div className="mb-8 mt-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex : Bill Gates" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex : example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex mb-8">
                <div className="mr-5">
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Whastapp Number</FormLabel>
                        <FormControl>
                          <Input
                            className="size-20px"
                            placeholder="Ex : 0869420666"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-[12px] sm:text-[12px] w-[170px] sm:w-[193px]">
                              <SelectValue placeholder="Select an Option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="men">Men</SelectItem>
                            <SelectItem value="women">Women</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex mb-8 mt-8">
                <div className="mr-5">
                  <FormField
                    control={form.control}
                    name="faculty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faculty</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-[12px] sm:text-[12px] w-[170px] sm:w-[172px]">
                              <SelectValue placeholder="Select an Option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem  value="FTE">TEKNIK ELEKTRO</SelectItem>
                            <SelectItem  value="FRI">
                              REKAYASA INDUSTRI
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="year_of_enrollment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year of enrollment</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-[12px] sm:text-[12px] w-[170px] sm:w-[193px]">
                              <SelectValue placeholder="Select an Option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mb-8 mt-8">
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Major</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex : S1 Teknik Telekomunikasi"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex mb-8 mt-8">
                <div className="mr-5">
                  <FormField
                    control={form.control}
                    name="nim"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NIM</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex : 110122000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex : TT-46-01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mb-8">
                <Alert>
                  <FileUp className="h-4 w-4" />
                  <AlertTitle>Attention !!</AlertTitle>
                  <AlertDescription>
                    Ensure that all recruitment documents are in accordance with
                    the terms and conditions, such as:
                    <br />
                    a. CV in ATS-Friendly Format
                    <br />
                    b. Formal Photo 4x6 & Portfolio (if there is one, it&apos;s
                    better)
                    <br />
                    c. KSM & KHS
                    <br />
                    d. Self Description
                    <br />
                    e. Motivation Letter
                    <br />
                    f. Essay
                    <br />
                    g. Twibbon Post in Instagram
                    <div className="text-blue-500">
                      <Link
                        href="https://www.tokopedia.com/cncstorebandung/cnc-breadboard-mb-102-solderless-830-830p?extParam=whid%3D15512"
                        target="_blank"
                      >
                        🔗Link Twibbon
                      </Link>
                    </div>
                    <br />
                    For more detailed information, please refer to the homepage
                    of this website.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="mb-8">
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Document</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex : https://drive.google.com/file/d/.../view?usp=sharing"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-8">
                <Alert variant="destructive">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Ensure that the document link you{"\u0027"}ve submitted is
                    accessible to the public. Set general access to anyone with
                    the link <br />
                    <br />* Pastikan bahwa tautan dokumen yang Anda kirimkan
                    dapat diakses oleh publik. Tetapkan akses umum untuk siapa
                    saja yang memiliki tautan tersebut*
                  </AlertDescription>
                </Alert>
              </div>
              <div className="items-top flex space-x-2 mb-8">
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          required
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I have filled in all the required data.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
