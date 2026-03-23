import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "../../components/ui/field"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendHorizontal } from "lucide-react"


export default function ContactCard(){


    return(
        <Card className="w-full md:max-w-3xl">
             <CardHeader>
            <CardTitle className="flex justify-center text-3xl font-bold w-full">Contact Us</CardTitle>
            <CardDescription className="flex justify-center  w-full text-sm text-zinc-500">Let's build something greate together</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <span className="font-medium">Email Address</span>
                    <Input placeholder="Enter your Email" className="min-w-[300px]"/>
                </div>
                <div className="flex flex-col gap-1">
                     <span className="font-medium">Select a service</span>
                     <div className="flex flex-wrap gap-2 max-w-[400px]">
                     {services.map((service) => (
                        <Button className="flex  p-2 bg-zinc-100 rounded-2xl text-sm text-black hover:bg-blue-200 dark:bg-zinc-800 dark:text-white/80">{service.service}</Button>
                     ))}
                </div>
                </div>
                <div>
                     <span className="font-medium">Add details</span>
                     <Textarea placeholder="Tell me more about your project (optional)" className="min-h-[150px]" />
                </div>

            </CardContent>
            <CardFooter>
                <Button className=" p-6 w-full dark:bg-white">
                    <span className="flex justify-center items-center gap-2 text-2xl font-light ">Get Quatation</span>
                </Button>
            </CardFooter>

        </Card>
    )
}


const services = [
    {
        service: "Landing Page"
    },
    {
        service: "Full Stack Website"
    },
    {
        service: "React Project Help"
    }
]
