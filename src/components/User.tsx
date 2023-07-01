import { signIn, signOut, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import Image from 'next/image';

const User: FunctionComponent = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <div>
        <button onClick={() => signIn('discord')}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>

      <Image
        src={session.user.image as string}
        alt={session.user.name as string}
        width={50}
        height={50}
      />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default User;
