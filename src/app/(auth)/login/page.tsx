"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import api from "@api/index";
import { Button } from "@shadcn/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shadcn/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@shadcn/ui/card";
import { Input } from "@shadcn/ui/input"
import { useAppDispatch } from "@stores/store";

const formSchema = z.object({
  email: z.string({
    required_error: "Email is required"
  }),
  password: z.string({
    required_error: "Password is required"
  }),
})

export default function Login() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "edjour.dev@gmail.com",
      password: "@Test123456",
    },
  })

  const login = async (data) => {
    try {
      const response = await api.auth.login(data);
      console.log(response);

      if (response?.success) {
        const data = response.data;

        dispatch(
          login({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(login)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mot de passe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="destructive">Submit</Button>
          </form>
        </Form>
        </CardContent>
      </Card>
    </main>
  )
}

