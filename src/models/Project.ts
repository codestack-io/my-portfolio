import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  image: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  githubClient?: string;
  challenges?: string;
  futurePlans?: string;
  screenshots?: string[];
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], default: [] },
  features: { type: [String], default: [] },
  liveLink: { type: String, default: "" },
  githubClient: { type: String, default: "" },
  challenges: { type: String, default: "" },
  futurePlans: { type: String, default: "" },
  screenshots: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const Project = models.Project || model<IProject>("Project", ProjectSchema);
