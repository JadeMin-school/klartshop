import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Router from "./App.tsx";



const CLIENT_ID = import.meta.env.VITE_CLIENT_ID_GOOGLE;

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId={CLIENT_ID}>
				<Router/>
			</GoogleOAuthProvider>
		</BrowserRouter>
	</StrictMode>,
);