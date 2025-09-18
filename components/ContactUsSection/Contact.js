"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <div className="text-center my-12 text-gray-900 dark:text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, idea, or need support? We’re here to help.
            Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-xl border border-gray-200 dark:border-white/10">
          {/* Contact Information */}
          <div className="text-white p-8 bg-gradient-to-br from-[#0C5FA8] to-[#1076BE] dark:from-[#FAA31A] dark:to-[#e09215]">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <ContactInfo
                icon={MapPin}
                label="Our Office"
                value="Shop No. 7, 2nd Floor, fly over 302018, Gopalpura Bypass Rd, Triveni Nagar, Gopal Pura Mode, Jaipur, Rajasthan 302018"
                href="https://maps.app.goo.gl/3Q4k9NYE3MQJaUnQA"
              />
              <ContactInfo icon={Mail} label="Email Us" value="travelsaathii.info@gmail.com" href="mailto:travelsaathii.info@gmail.com" />
              <ContactInfo icon={Phone} label="Call Us" value="+91 9950188813" href="tel:+919950188813" />
              <ContactInfo icon={Clock} label="Working Hours" value="Mon - Fri: 10:30 AM – 7:00 PM" />
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialIcon href="" icon={Facebook} />
                <SocialIcon href="" icon={Youtube} />
                <SocialIcon href="" icon={Linkedin} />
                <SocialIcon href="" icon={Instagram} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name">First Name <span className="text-red-500">*</span></Label>
                  <Input id="first_name" name="first_name" required placeholder="John" className="mt-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 focus-visible:ring-2 focus-visible:ring-[#0C5FA8] dark:focus-visible:ring-[#FAA31A]" />
                </div>
                <div>
                  <Label htmlFor="last_name">Last Name <span className="text-red-500">*</span></Label>
                  <Input id="last_name" name="last_name" required placeholder="Doe" className="mt-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border:white/10 focus-visible:ring-2 focus-visible:ring-[#0C5FA8] dark:focus-visible:ring-[#FAA31A]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="to_email">Email <span className="text-red-500">*</span></Label>
                  <Input id="to_email" name="to_email" type="email" required placeholder="your@email.com" className="mt-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 focus-visible:ring-2 focus-visible:ring-[#0C5FA8] dark:focus-visible:ring-[#FAA31A]" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                  <Input id="phone" type="number" name="phone" required placeholder="+91 1234567890" className="mt-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 focus-visible:ring-2 focus-visible:ring-[#0C5FA8] dark:focus-visible:ring-[#FAA31A]" />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Message</Label>
                <Textarea id="description" name="description" placeholder="How can we help you?" className="h-28 mt-1 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 focus-visible:ring-2 focus-visible:ring-[#0C5FA8] dark:focus-visible:ring-[#FAA31A]" />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree" required className="mt-1" />
                <Label htmlFor="agree" className="text-sm text-muted-foreground">
                  By submitting this form, I confirm and agree to storing and processing of my data by Traveeo as described in the{" "}
                  <Link href="" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link> <span className="text-red-500">*</span>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0C5FA8] dark:bg-[#FAA31A] text-white py-3 px-6 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// ContactInfo component
function ContactInfo({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-[#064e8d] dark:bg-[#cc8a2c] rounded-lg flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-blue-100 dark:text-white">{label}</h3>
        {href ? (
          <Link href={href} className="text-white hover:underline">
            {value}
          </Link>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
}

// SocialIcon component
function SocialIcon({ href, icon: Icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-[#064e8d] dark:bg-[#cc8a2c] rounded-full text-white hover:opacity-90 transition"
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}
