import { Flex, TextArea } from '@radix-ui/themes';

export const Main = () => {
  return (
    <Flex direction="column" height="500px" p="4">
      <TextArea color="blue" variant="soft" size="3" placeholder="Ответ AI..." disabled />
    </Flex>
  );
};
