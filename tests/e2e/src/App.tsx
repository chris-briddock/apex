import type React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Routing from './routing/Routing';
import './App.css';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                    <Header />
                    <main className="py-8">
                        <Routes>
                            {Routing.map(({ path, element }, key) => (
                                <Route key={key} path={path} element={element} />
                            ))}
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
