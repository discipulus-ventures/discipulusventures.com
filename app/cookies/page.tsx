"use client";

import Container from "../components/Container";
import Footer from "../components/Footer";

const CookiesPage: React.FC = () => {
  return (
    <Container bgColor="#000000">
      <div className="min-h-screen pt-16 px-8 md:px-16 lg:px-32 xl:px-48 max-w-4xl mx-auto">
        <h1 className="font-freight font-semibold text-4xl xl:text-5xl pt-12 pb-8">Cookie Policy</h1>
        <p className="text-sm text-white text-opacity-60 mb-8">Last updated: February 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
          <p className="text-white text-opacity-80 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What Cookies and Local Storage We Use</h2>
          <p className="text-white text-opacity-80 leading-relaxed mb-4">
            This site uses only essential cookies and browser local storage necessary for the website to operate. We do not use any analytics, advertising, or tracking cookies.
          </p>
          <div className="border border-white border-opacity-20 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white border-opacity-20 bg-white bg-opacity-5">
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white border-opacity-10">
                  <td className="px-4 py-3 font-mono text-xs text-white text-opacity-70">__prerender_bypass,<br />__next_preview_data</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Essential (cookie)</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Set by the Next.js framework to enable preview mode and correct page rendering</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-white text-opacity-70">cookie-consent</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Functional (localStorage)</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Stores your consent preference so the banner is not shown on repeat visits</td>
                  <td className="px-4 py-3 text-white text-opacity-70">Until cleared</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
          <p className="text-white text-opacity-80 leading-relaxed mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white text-opacity-80 ml-2">
            <li>View cookies stored on your device</li>
            <li>Delete some or all cookies</li>
            <li>Block cookies from specific or all websites</li>
            <li>Set preferences for certain types of cookies</li>
          </ul>
          <p className="text-white text-opacity-80 leading-relaxed mt-4">
            Note that disabling essential cookies may affect how this website functions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-white text-opacity-80 leading-relaxed">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-white text-opacity-80 leading-relaxed">
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href="mailto:jakob.diepenbrock@discipulusventures.com" className="underline hover:opacity-70 transition-opacity">
              jakob.diepenbrock@discipulusventures.com
            </a>.
          </p>
        </section>
      </div>
      <Footer />
    </Container>
  );
};

export default CookiesPage;
