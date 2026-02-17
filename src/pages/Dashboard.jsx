import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Button } from "../components/Button";
import { FileText, Download, User } from "lucide-react";

export default function Dashboard() {
  const resources = [
    {
      id: 1,
      title: "Data Structures Notes",
      description: "Comprehensive notes for DSA",
      subject: "Computer Science",
      author: "Alice Johnson",
      date: "2023-10-15",
    },
    {
      id: 2,
      title: "React Basics",
      description: "Introduction to React.js",
      subject: "Web Development",
      author: "Bob Smith",
      date: "2023-10-18",
    },
    {
      id: 3,
      title: "Linear Algebra",
      description: "Matrix operations and vector spaces",
      subject: "Mathematics",
      author: "Charlie Brown",
      date: "2023-10-20",
    },
    {
      id: 4,
      title: "Operating Systems",
      description: "Process management and scheduling",
      subject: "Computer Science",
      author: "Diana Prince",
      date: "2023-10-22",
    },
    {
      id: 5,
      title: "Database Management",
      description: "SQL and NoSQL fundamentals",
      subject: "Computer Science",
      author: "Evan Wright",
      date: "2023-10-25",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent relative z-10">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-2 text-lg relative z-10">
            Browse and download capabilities for all study resources.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.id} className="flex flex-col h-full border-white/5 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-primary/60 font-medium">
                  {resource.subject}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground gap-3 bg-white/5 p-2 rounded-md w-fit">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{resource.author}</span>
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{resource.date}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button className="w-full group-hover:shadow-primary/50 transition-shadow" variant="secondary">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
