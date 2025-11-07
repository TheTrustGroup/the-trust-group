import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = generateSEOMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for The Trust Group. Learn about how we use cookies and similar technologies on our website.",
  keywords: ["cookie policy", "cookies", "The Trust Group"],
  url: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-4 md:pt-8">
      <Section variant="default" size="default">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Cookie Policy
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. What Are Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (if applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> info@thetrustgroupsolutions.com<br />
                <strong>Address:</strong> 1 Nortei Ababio Street, Suite 37, Accra, Greater Accra, 00233, Ghana
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

