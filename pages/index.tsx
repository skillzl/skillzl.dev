import Container from "components/Container";
import Profile from "components/Profile";
import Timeline from "components/Timeline";

export default function Home() {
  return (
    <Container>
      <Profile />
      <footer className="mt-10 border-t pt-6 dark:border-gray-800 shadow-2xl" />
      <Timeline />
    </Container>
  );
}
