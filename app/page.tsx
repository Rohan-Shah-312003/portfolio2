"use client";

import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const name = "Rohan Shah";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Initialize theme state
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
  }, [setTheme]);

  // Smooth scroll to section when clicking on navigation links
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <User className="h-5 w-5" />
            <span>{name}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#internship"
              onClick={(e) => scrollToSection(e, "internship")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Internship
            </a>
            <a
              href="#education"
              onClick={(e) => scrollToSection(e, "education")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                setTheme(newTheme);
                localStorage.setItem("theme", newTheme);
              }}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              <Button>Contact Me</Button>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {name}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Computer Science And Engineering Graduate
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                  >
                    <Button>
                      View My Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                  >
                    <Button variant="outline">Contact Me</Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="h-64 w-64 border-4 border-background">
                  <AvatarImage src="/avatar.JPG" alt={name} />
                  <AvatarFallback className="text-6xl">
                    {name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Me
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a recent Computer Science graduate with a passion for
                  building innovative solutions. My journey in technology began
                  with a curiosity about how software shapes our world, and has
                  evolved into a commitment to creating impactful applications.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Problem Solver</h3>
                        <p className="text-muted-foreground">
                          I enjoy tackling complex problems and finding elegant
                          solutions through code.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Continuous Learner
                        </h3>
                        <p className="text-muted-foreground">
                          Technology evolves rapidly, and I'm committed to
                          staying at the forefront of new developments.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Team Player</h3>
                        <p className="text-muted-foreground">
                          I thrive in collaborative environments and enjoy
                          working with diverse teams to achieve common goals.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="About me"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the technologies and tools I've worked with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Python</Badge>
                    <Badge>Django</Badge>
                    <Badge>Java</Badge>
                    <Badge>Spring Boot</Badge>
                    <Badge>RESTful APIs</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>SQL</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Firebase</Badge>
                    <Badge>Redis</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>DevOps & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Docker</Badge>
                    <Badge>CI/CD</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Vercel</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>React Native</Badge>
                    <Badge>Flutter</Badge>
                    <Badge>Android (Java)</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Other Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Data Structures</Badge>
                    <Badge>Algorithms</Badge>
                    <Badge>Problem Solving</Badge>
                    <Badge>UI/UX Design</Badge>
                    <Badge>Agile Methodology</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on during my
                  academic journey and beyond.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>E-Commerce Platform</CardTitle>
                  <CardDescription>Full-stack web application</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="E-Commerce Platform"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Developed a complete e-commerce solution with user
                    authentication, product catalog, shopping cart, and payment
                    processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">Stripe</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>Mobile application</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Task Management App"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Created a task management application with features like
                    task creation, categorization, reminders, and progress
                    tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">Redux</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Machine Learning Model</CardTitle>
                  <CardDescription>Data science project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Machine Learning Model"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Built a machine learning model to predict housing prices
                    based on various features, achieving 92% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Matplotlib</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Report
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Social Media Dashboard</CardTitle>
                  <CardDescription>Frontend project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Social Media Dashboard"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Designed and implemented a responsive dashboard to visualize
                    social media analytics and engagement metrics.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Chart.js</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Inventory Management System</CardTitle>
                  <CardDescription>Backend project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Inventory Management System"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Developed a robust backend system for inventory management
                    with features for tracking stock levels, orders, and
                    suppliers.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Spring Boot</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">JUnit</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Docs
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Weather App</CardTitle>
                  <CardDescription>API integration project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Weather App"
                    className="rounded-lg object-cover mb-4 w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Built a weather application that provides real-time weather
                    data and forecasts based on user location or search.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">OpenWeather API</Badge>
                    <Badge variant="outline">Geolocation API</Badge>
                    <Badge variant="outline">CSS3</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="internship"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Internship Experience
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Professional experience that has shaped my skills and career
                  path.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Software Development Intern</CardTitle>
                    <Badge>Summer 2022</Badge>
                  </div>
                  <CardDescription>Tech Innovations Inc.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>
                          Collaborated with the development team to build and
                          maintain web applications
                        </li>
                        <li>
                          Implemented new features using React and Node.js
                        </li>
                        <li>
                          Participated in code reviews and agile development
                          processes
                        </li>
                        <li>
                          Optimized database queries to improve application
                          performance
                        </li>
                        <li>Assisted in troubleshooting and resolving bugs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">Express</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">Jira</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>
                          Developed a dashboard feature that increased user
                          engagement by 15%
                        </li>
                        <li>
                          Reduced API response time by 30% through query
                          optimization
                        </li>
                        <li>
                          Received certification of excellence for outstanding
                          performance
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certification
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Education
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic journey and qualifications.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      Bachelor of Science in Computer Science
                    </CardTitle>
                    <Badge>2019 - 2023</Badge>
                  </div>
                  <CardDescription>University of Technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">GPA: 3.8/4.0</h4>
                    </div>
                    <div>
                      <h4 className="font-medium">Key Courses:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Data Structures and Algorithms</li>
                        <li>Database Systems</li>
                        <li>Web Development</li>
                        <li>Mobile Application Development</li>
                        <li>Artificial Intelligence</li>
                        <li>Computer Networks</li>
                        <li>Software Engineering</li>
                        <li>Operating Systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Achievements:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Dean's List (All Semesters)</li>
                        <li>Best Capstone Project Award</li>
                        <li>Hackathon Winner (2022)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>High School Diploma</CardTitle>
                    <Badge>2015 - 2019</Badge>
                  </div>
                  <CardDescription>Central High School</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">GPA: 4.0/4.0</h4>
                    </div>
                    <div>
                      <h4 className="font-medium">Activities:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Computer Science Club (President)</li>
                        <li>Math Team</li>
                        <li>Robotics Competition</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Me
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Fill out the form and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          rohanshah@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">
                          linkedin.com/in/rohanshah
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <p className="text-sm text-muted-foreground">
                          github.com/rohanshah
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Resume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download my resume for a complete overview of my skills,
                      experience, and education.
                    </p>
                    <Button className="w-full">
                      <Code className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Rohan-Shah-312003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aokira31/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:rohan312003@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
