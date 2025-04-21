import { OptionsLayout } from '@/components';
import { createRoot } from 'react-dom/client';
import { Flex, Text, TextArea, Separator, Box, Button, TextField, Select, Switch } from '@radix-ui/themes';
import { useState, ChangeEvent } from 'react';

const models = [
  'gpt-4o',
  'gpt-4o-mini',
  'o1',
  'gpt-4-turbo',
  'gpt-3.5-turbo',
  'gpt-4.5-preview',
  'o3-mini',
  'gpt-4-1106-preview',
];

function Options() {
  const [vacancyPrompt, setVacancyPrompt] = useState('');
  const [resumePrompt, setResumePrompt] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [generateCoverLetter, setGenerateCoverLetter] = useState(true);
  const [saveResumeForAnalysis, setSaveResumeForAnalysis] = useState(true);
  const [hasApiKey, setHasApiKey] = useState(false);

  const handleSave = () => {
    console.log({
      vacancyPrompt,
      resumePrompt,
      apiKey,
      selectedModel,
      hasApiKey,
    });
  };

  const handleReset = () => {
    setVacancyPrompt('');
    setResumePrompt('');
    setApiKey('');
    setSelectedModel('gpt-4o');
    setHasApiKey(false);
  };

  const handleTextChange = (setter: (value: string) => void) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setter(e.target.value);
  };

  return (
    <OptionsLayout>
      <Flex direction="column" mt="4">
        <Flex direction="column" gap="4">
          <Text size="5" weight="bold">
            Настройки промптов
          </Text>
          <Separator style={{ width: '100%' }} />
          <Box>
            <Text>Промпт на анализ вакансии:</Text>
            <TextArea
              placeholder="Введите промпт..."
              value={vacancyPrompt}
              onChange={handleTextChange(setVacancyPrompt)}
              resize="vertical"
            />
          </Box>
          <Box>
            <Text>Промпт на анализ резюме:</Text>
            <TextArea
              placeholder="Введите промпт..."
              value={resumePrompt}
              onChange={handleTextChange(setResumePrompt)}
              resize="vertical"
            />
          </Box>
          <Text size="5" weight="bold">
            АПИ провайдер
          </Text>
          <Separator style={{ width: '100%' }} />
          <Flex align="center" gap="2">
            <Text>Ипользовать API ключ?</Text>
            <Switch checked={hasApiKey} onCheckedChange={setHasApiKey} />
          </Flex>
          {hasApiKey && (
            <Flex direction="column" gap="2">
              <Box>
                <Text>API ключ:</Text>
                <input
                  type="password"
                  placeholder="Введите API ключ..."
                  value={apiKey}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setApiKey(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid var(--gray-a7)',
                  }}
                />
              </Box>
              <Flex gap="2" align="center">
                <Text>Модель ChatGPT:</Text>
                <Select.Root value={selectedModel} onValueChange={setSelectedModel}>
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Group>
                      {models.map((model) => (
                        <Select.Item key={model} value={model}>
                          {model}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </Flex>
          )}
          <Flex gap="2">
            <Button onClick={handleSave}>Сохранить</Button>
            <Button variant="outline" onClick={handleReset}>
              Сбросить
            </Button>
          </Flex>
          <Text size="5" weight="bold">
            Кнопки
          </Text>
          <Separator style={{ width: '100%' }} />
          <Flex align="center" gap="2">
            <Text>Анализ резюме:</Text>
            <Switch checked={saveResumeForAnalysis} onCheckedChange={setSaveResumeForAnalysis} />
          </Flex>
          <Flex align="center" gap="2" mb="4">
            <Text>Сгенерить сопроводительное письмо:</Text>
            <Switch checked={generateCoverLetter} onCheckedChange={setGenerateCoverLetter} />
          </Flex>
        </Flex>
      </Flex>
    </OptionsLayout>
  );
}

export default Options;

const root = document.getElementById('root')!;
createRoot(root).render(<Options />);
