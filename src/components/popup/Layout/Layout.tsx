import '@radix-ui/themes/styles.css';
import { Theme, Flex, Box, Container } from '@radix-ui/themes';
import { Header, Footer } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Theme accentColor="blue" radius="full" panelBackground="translucent" appearance="dark">
      <Container>
        <Flex direction="column" height="100vh" width="100%">
          <Header />
          <Box flexGrow="1">{children}</Box>
          <Footer />
        </Flex>
      </Container>
    </Theme>
  );
};
