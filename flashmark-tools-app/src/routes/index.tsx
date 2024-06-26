import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { BtnSm } from "~/components/btn-sm/btn-sm";
import { SignUpForm } from "~/components/email-sign-up-form/email-sign-up-form";

export default component$(() => {
  return (
    <div>
      <section id="intro" class="flex flex-col items-start min-h-[50svh] align-middle justify-around  mb-12">
        <h1 class="text-4xl font-bold mb-6">Unlock Deep Customer Insights in Minutes</h1>
        <p class="text-xl mb-8">Generate detailed user personas from any website with our AI-driven tool.</p>
        <BtnSm label="Get Started for Free" href="/auth/sign-up" />
      </section>

      <section id="what-is" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">What is Flashmark.profiler?</h2>
        {/* Add description here */}
      </section>

      <section id="features" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why Choose Flashmark.profiler?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-xl font-semibold mb-2">Rapid Persona Generation</h3>
            <p>Get detailed user personas in just minutes, saving you hours of manual research.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Actionable Data</h3>
            <p>Use personas to inform your design and marketing strategies, improving engagement and conversion rates.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">In-Depth Insights</h3>
            <p>Our AI goes beyond basic demographics to provide psychographics and behavioral insights.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">User-Friendly Interface</h3>
            <p>Easy-to-use interface designed for both novice and experienced users.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" class="flex flex-col items-start mb-12">
        <h2 class="text-3xl font-bold mb-6">How Does It Work?</h2>
        <ol class="list-decimal list-inside space-y-4">
          <li>Enter the website URL you want to analyze.</li>
          <li>Our AI agents visit the site, extracting and evaluating key information.</li>
          <li>Receive four detailed user personas, complete with demographic, psychographic, and behavioral data.</li>
          <li>Review the Personas and find new insights.</li>
        </ol>
        <BtnSm label="Get Started for Free" href="/auth/sign-up" />
      </section>

      <section id="pricing" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Pricing Options</h2>
        <p class="mb-4">Get started for free. Then Pay as you go!</p>
        {/* Add pricing options here */}
      </section>

      <section id="founder" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Founder's Note:</h2>
        <p class="mb-4">In creating Flashmark.digital, I aim to develop an indispensable partnership with our clients. Helping you build trust with your clients is my goal. And hopefully we can find our Purpose together!</p>
        <p class="font-semibold">- Neil Ketcham</p>
      </section>

      <section id="newsletter" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Keep up to Date</h2>
        <p class="mb-4">Get our Newsletter for Branding insights and tactics you can implement yourself</p>
        <SignUpForm />
      </section>

      <section id="faq" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">F.A.Q.</h2>
        {/* Add FAQ content here */}
      </section>
    </div>
  );
});

