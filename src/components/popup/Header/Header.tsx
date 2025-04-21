import { Text, Flex, Button } from '@radix-ui/themes';
import { GearIcon, ExitIcon } from '@radix-ui/react-icons';
import logo from '@/assets/logo.jpg';

export const Header = () => {
  const onClickSettings = () => {
    const url = browser.runtime.getURL('/options.html');
    browser.tabs.create({ url });
  };

  const handleClosePopup = () => window.close();

  return (
    <Flex p="4" justify="between" align="center">
      <Flex justify="center" align="center" gap="2">
        <img src={logo} alt="logo" width={30} height={30} style={{ borderRadius: '50%' }} />
        <Text weight="bold" size="3">
          Bagodelnya
        </Text>
      </Flex>
      <Flex gap="4">
        <Button variant="ghost" size="1" onClick={onClickSettings}>
          <GearIcon />
        </Button>
        <Button variant="ghost" size="1" onClick={handleClosePopup}>
          <ExitIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
