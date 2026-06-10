export const dynamic = 'force-dynamic';
import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
const siteName = process.env.SITE_NAME || (isGeneralServerSide() ? 'Postiz' : 'Gitroom');
export const metadata: Metadata = {
  title: `${siteName} Login`,
  description: '',
};
export default async function Auth() {
  return <Login />;
}
