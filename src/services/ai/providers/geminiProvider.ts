import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AiProviderClient, AiCompletionRequest } from "../types";
import { DEFAULT_MODELS } from "../types";
import { createProviderFactory } from "../providerFactory";

const factory = createProviderFactory(
  (apiKey) => new GoogleGenerativeAI(apiKey),
);

export function createGeminiProvider(apiKey: string): AiProviderClient {
  const client = factory.getClient(apiKey);

  return {
    async complete(req: AiCompletionRequest): Promise<string> {
      const model = client.getGenerativeModel({
        model: DEFAULT_MODELS.gemini,
        systemInstruction: req.systemPrompt,
      });

      const result = await model.generateContent(req.userContent);
      return result.response.text();
    },

    async testConnection(): Promise<boolean> {
      try {
        const model = client.getGenerativeModel({
          model: DEFAULT_MODELS.gemini,
        });
        await model.generateContent("Say hi");
        return true;
      } catch {
        return false;
      }
    },
  };
}

export function clearGeminiProvider(): void {
  factory.clear();
}
