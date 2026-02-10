import { getUserFromRequest } from '../../lib/auth';

export async function getServerSideProps({ req }) {
  const user = await getUserFromRequest(req);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}

export default function Dashboard({ user }) {

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    window.location.href = '/login';
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Usuário logado: {user.email}</p>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
