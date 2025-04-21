import { Flex, Box, Text, Theme, Container, Separator } from '@radix-ui/themes';

export const OptionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme accentColor="indigo" radius="large" appearance="dark">
      <Container size="1" px="4" height="100vh">
        <Flex direction="column">
          <Text size="8" weight="bold">
            Bagodelnya | Настроки
          </Text>
          <Box>{children}</Box>
        </Flex>
      </Container>
    </Theme>
  );
};
