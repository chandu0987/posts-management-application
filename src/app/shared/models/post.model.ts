import { Content } from "@angular/compiler/src/render3/r3_ast";
import { title } from "process";

export interface Post {
  _id? : string;
  title: string;
  content: string;
}
