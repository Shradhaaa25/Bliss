import { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { UploadCloud } from "lucide-react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading:", { title, description, file });
    alert("Resource Uploaded (Mock)");
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="relative">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent relative z-10">Upload Resource</h1>
          <p className="text-muted-foreground relative z-10">
            Share your study materials with the community.
          </p>
        </div>

        <Card className="border-white/5 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Resource Details</CardTitle>
            <CardDescription>
              Provide the details of the resource you are uploading.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Data Structures Notes"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Brief description of the content"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                  <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <UploadCloud className="h-8 w-8 text-primary group-hover:text-primary" />
                  </div>
                  <Input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                  <Label htmlFor="file" className="cursor-pointer">
                    <span className="text-primary font-medium hover:underline glow-text">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </Label>
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF, DOCX, PPTX (Max 10MB)
                  </p>
                  {file && (
                    <div className="mt-4 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                      Selected: {file.name}
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Upload Resource
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
