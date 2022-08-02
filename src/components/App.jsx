import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import ProtectedRoute from './Routes/ProtectedRoute';
import HomeTabPage from 'pages/HomeTabPage';

import { Home } from 'components/Routes/Home';
import { Statistics } from './Routes/Staistics';

const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));

export const App = () => {

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="registration" element={<RegisterPage />} />
					<Route path="login" element={<LoginPage />} />
				</Route>

				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/home-tab"
					element={
						<ProtectedRoute>
							<HomeTabPage />
						</ProtectedRoute>
					}
				 >
          <Route index element={<Home />} />
          <Route path="home" index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="banktable" element={<Statistics />} />
        </Route>
			</Routes>
		</Suspense>
	);

};
