import { ResponseDTO } from "./response";

export type ScriptResponseDTO = ResponseDTO<{
  intro: string;
}>;

export interface Section {
  type: string;
  content: string;
}
