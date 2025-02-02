// src/index.ts

// Buttons
export { default as Button } from "./components/buttons/Button/Button";
export { default as IconButton } from "./components/buttons/IconButton/IconButton";
export { default as LinkButton } from "./components/buttons/LinkButton/LinkButton";
export { default as LockToggleButton } from "./components/buttons/LockToggleButton/LockToggleButton";
export { default as PlayPauseButton } from "./components/buttons/PlayPauseButton/PlayPauseButton";
export { default as ActionsMenuButton } from "./components/buttons/ActionsMenuButton/ActionsMenuButton";

// Fields
export { default as AutocompleteField } from "./components/fields/AutocompleteField/AutocompleteField";
export { default as CheckboxField } from "./components/fields/CheckboxField/CheckboxField";
export { default as ColorField } from "./components/fields/ColorField/ColorField";
export { default as LongTextField } from "./components/fields/LongTextField/LongTextField";
export { default as PasswordField } from "./components/fields/PasswordField/PasswordField";
export { default as PastelColorField } from "./components/fields/PastelColorField/PastelColorField";
export { default as RadioField } from "./components/fields/RadioField/RadioField";
export { default as TextField } from "./components/fields/TextField/TextField";

// Dynamic Components
export { default as DynamicForm } from "./components/DynamicForm/DynamicForm";
export { default as DynamicIcon } from "./components/DynamicIcon/DynamicIcon";
export { default as DynamicList } from "./components/DynamicList/DynamicList";
export { default as MultiStepForm } from "./components/MultiStepForm/MultiStepForm";

// Utility Components
export { default as Icon } from "./components/Icon/Icon";
export { default as Popover } from "./components/Popover/Popover";
export { default as PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
export { default as SideMenu } from "./components/SideMenu/SideMenu";
export { default as Touchable } from "./components/Touchable/Touchable";
export { default as Header } from "./components/Header/Header";
export { default as SortableContainer } from "./components/Sortable/SortableContainer";
export { default as SortableHandle } from "./components/Sortable/SortableHandle";
export { default as Toast } from "./components/Toast/Toast";
export { default as Text } from "./components/Text/Text";
export { default as Color } from "./components/Color/Color";
export { default as InterpolatedContent } from "./components/InterpolatedContent/InterpolatedContent";
export { default as SearchBar } from "./components/SearchBar/SearchBar";
export { default as Thumbnail } from "./components/Thumbnail/Thumbnail";
export { default as StepTracker } from "./components/StepTracker/StepTracker";
export { default as Pill } from "./components/Pill/Pill";
export { default as PillGroup } from "./components/PillGroup/PillGroup";
export { default as IndicatorCard } from "./components/IndicatorCard/IndicatorCard";
export { default as Paper } from "./components/Paper/Paper";
export { default as TypingEffect } from "./components/TypingEffect/TypingEffect";
export { default as ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
export { default as NoContent } from "./components/NoContent/NoContent";
export { default as Portal } from "./components/Portal/Portal";
export { default as Nav } from "./components/Nav/Nav";
export { default as Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";

// Indicators
export { default as RankingIndicator } from "./components/indicators/RankingIndicator/RankingIndicator";
export { default as SummaryIndicator } from "./components/indicators/SummaryIndicator/SummaryIndicator";

// Mini Charts
export { default as MiniBarChart } from "./components/miniCharts/MiniBarChart/MiniBarChart";
export { default as MiniStackedBarChart } from "./components/miniCharts/MiniStackedBarChart/MiniStackedBarChart";
export { default as MiniPieChart } from "./components/miniCharts/MiniPieChart/MiniPieChart";
export { default as MiniLineChart } from "./components/miniCharts/MiniLineChart/MiniLineChart";
export { default as MiniGroupedBarChart } from "./components/miniCharts/MiniGroupedBarChart/MiniGroupedBarChart";

// Loader
export { default as Loader } from "./components/Loader/Loader";
export { default as SpinnerLoader } from "./components/Loader/SpinnerLoader";
export { default as GridLoader } from "./components/Loader/GridLoader";
export { default as DotLoader } from "./components/Loader/DotLoader";

// Config
export { default as themeColors } from "./config/themeColors";
export { default as palette } from "./config/palette";

// httpClient
export {
  httpClient, // Default client instance
  securedHttpClient, // Client with built-in token interceptor
  HttpClient, // Export HttpClient class for creating custom instances
} from "./httpClient";

// Contexts
export { AuthProvider, useAuth } from "./contexts/AuthContext";

// hooks
export { default as useIsMobile } from "./hooks/useIsMobile";

// Utils
export { default as formatDate } from "./utils/formatDate";
export { default as formatToShortDate } from "./utils/formatToShortDate";
export { default as lightenDarkenColor } from "./utils/lightenDarkenColor";
export { default as adjustColor } from "./utils/adjustColor";
