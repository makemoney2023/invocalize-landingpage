'use client'

import { Button } from "@/components/ui/button"
import { Mic, BarChart, Users, Zap, MessageSquare, FileAudio, Wifi, PlayCircle, Heart, MoreHorizontal, Link as LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="InvocalizeAI Logo" width={64} height={64} />
          <span className="text-2xl font-bold">InvocalizeAI</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="hover:text-blue-400">Features</Link>
          <Link href="#benefits" className="hover:text-blue-400">Benefits</Link>
          <Link href="#testimonial" className="hover:text-blue-400">Testimonial</Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">Get a demo</Button>
      </header>

      <main>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 w-full h-[125%] top-[-25%]">
            <Image
              src="/soundwave.png"
              alt="AI Voice Interaction"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
            />
          </div>
          
          <section className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  AI Voice Agents: Your Virtual Assistants, Reimagined.
                </h1>
                <p className="text-xl text-gray-300">
                  Experience the future of voice interaction with our cutting-edge AI voice agents. Tailored to your specific needs, these intelligent assistants provide seamless, natural conversations, enhancing efficiency and productivity across various industries.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get a demo
                </Button>
              </div>
            </div>
          </section>

          <section id="features" className="bg-black bg-opacity-60 py-16 relative z-10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400 text-shadow">
                Powerful Features of InvocalizeAI
              </h2>
              {/* Add the following style to your global CSS or component styles */}
              <style jsx global>{`
                .text-shadow {
                  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                }
              `}</style>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <FileAudio className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Voice Transcription</h3>
                  <p className="text-gray-300">
                    Accurately convert spoken words into text, enabling easy documentation and analysis of voice interactions.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Wifi className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Real-Time Data Connectivity</h3>
                  <p className="text-gray-300">
                    Access and process live data streams, allowing for up-to-the-minute information and decision-making.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <PlayCircle className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Seamless Task Execution</h3>
                  <p className="text-gray-300">
                    Effortlessly perform complex tasks through voice commands, streamlining workflows and boosting productivity.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Heart className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-300">
                    Understand and interpret emotional tones in conversations, enhancing customer service and user experience.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <LinkIcon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">API Integrations</h3>
                  <p className="text-gray-300">
                    Seamlessly connect with various third-party services and platforms, expanding the capabilities of your AI voice agents.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <MoreHorizontal className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">And More...</h3>
                  <p className="text-gray-300">
                    Discover additional cutting-edge features designed to revolutionize your voice interaction experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
              Unlock the Power of AI Voice Agents: A Business Game-Changer
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              By integrating AI voice agents into your business operations, you're not just adopting technology; you're investing in a strategic advantage.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <BarChart className="h-12 w-12 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold">Streamline Processes</h3>
                <p className="text-gray-300">
                  Our intelligent assistants automate routine tasks, allowing your team to focus on high-value work.
                </p>
              </div>
              <div className="space-y-4">
                <Users className="h-12 w-12 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold">Enhance Customer Satisfaction</h3>
                <p className="text-gray-300">
                  Deliver exceptional experiences to your customers with real-time support and natural conversations.
                </p>
              </div>
              <div className="space-y-4">
                <Zap className="h-12 w-12 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold">Drive Efficiency</h3>
                <p className="text-gray-300">
                  Empower your team to accomplish more in less time, boosting overall productivity and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Imagine a World Where Voice Commands Your Tech
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Mic className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Voice Interaction</h3>
                <p className="text-gray-300">
                  Our AI understands your nuances, making interactions with technology more natural and intuitive than ever before.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Digital Companions</h3>
                <p className="text-gray-300">
                  More than just tools, our AI voice agents are personal digital assistants ready to revolutionize how you interact with technology.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailored to Your Needs</h3>
                <p className="text-gray-300">
                  Our AI voice agents are customized to your specific requirements, ensuring they fit seamlessly into your business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <blockquote className="text-xl italic border-l-4 border-blue-600 pl-4 py-2 mb-4">
              "InvocalizeAI's voice agents have transformed how we interact with our systems. The natural conversations and efficiency gains have been nothing short of revolutionary for our business operations."
            </blockquote>
            <p className="text-blue-400 font-semibold">- Emily Chen, CTO, FutureTech Solutions</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolutionize Your Business with AI Voice Agents
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Step into the future of voice interaction. Enhance efficiency, boost customer satisfaction, and unlock new possibilities with InvocalizeAI.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <div className="text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">40%</div>
              <p className="text-sm">Increase in operational efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">95%</div>
              <p className="text-sm">Customer satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-4xl font-bold mb-2">3x</div>
              <p className="text-sm">Faster query resolution</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Experience the Future of Voice AI
          </Button>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mic className="h-6 w-6" />
            <span className="text-xl font-bold">InvocalizeAI</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2023 InvocalizeAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}