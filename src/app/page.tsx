import { HomeActions } from "@/components/home-actions";
import { Container, Flex, Kbd, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10 sm:p-24">
      <Container size="1">
        <Flex direction="column" align="center" gap="5">
          <Image
              src="kanastruk-logo-white.svg"
              alt="Logo"
              width="260"
              height="120"
              className="invert dark:invert-0"
          />
          <Text as="p">
            Welcome to the Kanastruk Control Room demo app. You can join or start
            your own stream.
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Flex direction="row" gap="4">
            <Text as="p" size="2">
              Based off of the LiveKit livestream demo app. Find the original full-stack NextJS app{" "}
              <Link
                  href="https://github.com/livekit-examples/nextjs-livestream"
                  target="_blank"
              >
                here
              </Link>
              .
            </Text>
            <Image
                src="/wordmark.svg"
                alt="LiveKit"
                width="120"
                height="60"
                className="invert dark:invert-0"
            />
          </Flex>
          <Text size="1">
            Bored of the current color theme? Switch it up by pressing{" "}
            <Kbd>⌘&thinsp;C</Kbd> !
          </Text>
        </Flex>
      </Container>
    </main>
  );
}
