import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface SettingsState {
  apiKey: string;
  model: string;
  vacancyPrompt: string;
  resumePrompt: string;
  generateCoverLetter: boolean;
  saveResumeForAnalysis: boolean;
  hasApiKey: boolean;
  setApiKey: (apiKey: string) => void;
  setModel: (model: string) => void;
  setVacancyPrompt: (vacancyPrompt: string) => void;
  setResumePrompt: (resumePrompt: string) => void;
  setGenerateCoverLetter: (generateCoverLetter: boolean) => void;
  setSaveResumeForAnalysis: (saveResumeForAnalysis: boolean) => void;
  setHasApiKey: (hasApiKey: boolean) => void;
}

const zustandStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await storage.getItem(`local:${name}`);
  },
  setItem: async (name: string, value: string) => {
    await storage.setItem(`local:${name}`, value);
  },
  removeItem: async (name: string) => {
    await storage.removeItem(`local:${name}`);
  },
};

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        apiKey: '',
        model: 'gpt-4o',
        vacancyPrompt: '',
        resumePrompt: '',
        generateCoverLetter: true,
        saveResumeForAnalysis: true,
        hasApiKey: false,
        setApiKey: (apiKey: string) => set({ apiKey }),
        setModel: (model: string) => set({ model }),
        setVacancyPrompt: (vacancyPrompt: string) => set({ vacancyPrompt }),
        setResumePrompt: (resumePrompt: string) => set({ resumePrompt }),
        setGenerateCoverLetter: (generateCoverLetter: boolean) => set({ generateCoverLetter }),
        setSaveResumeForAnalysis: (saveResumeForAnalysis: boolean) => set({ saveResumeForAnalysis }),
        setHasApiKey: (hasApiKey: boolean) => set({ hasApiKey }),
      }),
      {
        name: 'userSettings',
        storage: createJSONStorage(() => zustandStorage),
      }
    )
  )
);
