import type { JSX } from "react";
import HomePage from "../pages/HomePage";
import DisplayPage from "../pages/DisplayPage";
import PositionPage from "../pages/PositionPage";
import SpacingPage from "../pages/SpacingPage";
import SizingPage from "../pages/SizingPage";
import FlexboxPage from "../pages/FlexboxPage";
import GridPage from "../pages/GridPage";
import TypographyPage from "../pages/TypographyPage";
import ColorsPage from "../pages/ColorsPage";
import BordersPage from "../pages/BordersPage";
import EffectsPage from "../pages/EffectsPage";
import OverflowVisibilityPage from "../pages/OverflowVisibilityPage";

type RoutingItem = {
    path: string;
    element: JSX.Element;
}

const Routing: RoutingItem[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/display',
        element: <DisplayPage />
    },
    {
        path: '/position',
        element: <PositionPage />
    },
    {
        path: '/spacing',
        element: <SpacingPage />
    },
    {
        path: '/sizing',
        element: <SizingPage />
    },
    {
        path: '/flexbox',
        element: <FlexboxPage />
    },
    {
        path: '/grid',
        element: <GridPage />
    },
    {
        path: '/typography',
        element: <TypographyPage />
    },
    {
        path: '/colors',
        element: <ColorsPage />
    },
    {
        path: '/borders',
        element: <BordersPage />
    },
    {
        path: '/effects',
        element: <EffectsPage />
    },
    {
        path: '/overflow-visibility',
        element: <OverflowVisibilityPage />
    }
];

export default Routing;
