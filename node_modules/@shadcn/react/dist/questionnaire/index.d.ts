import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { U as UseRenderComponentProps } from '../index-DoP2hiBu.js';

type QuestionnaireItemStatus = "unanswered" | "answered" | "skipped";
type QuestionnaireShortcutMode = "letters" | "numbers";
type QuestionnaireChoiceDefinition = {
    disabled?: boolean;
    value: string;
};
type QuestionnaireItemDefinition = {
    choices?: readonly QuestionnaireChoiceDefinition[];
    disabled?: boolean;
    name: string;
    required?: boolean;
};
type QuestionnaireRootState = {
    current: number;
    first: boolean;
    last: boolean;
    total: number;
};
type QuestionnaireRootProps = Omit<React.ComponentPropsWithRef<"form">, "defaultValue" | "value"> & {
    defaultItem?: string;
    item?: string;
    items?: readonly QuestionnaireItemDefinition[];
    onItemChange?: (item: string) => void;
    shortcuts?: QuestionnaireShortcutMode;
};
type QuestionnaireProgressState = QuestionnaireRootState;
type QuestionnaireProgressProps = UseRenderComponentProps<"div", QuestionnaireProgressState>;
type QuestionnaireItemState = {
    active: boolean;
    disabled: boolean;
    invalid: boolean;
    multiple: boolean;
    required: boolean;
    status: QuestionnaireItemStatus;
};
type QuestionnaireItemProps = Omit<React.ComponentPropsWithRef<"fieldset">, "name" | "value"> & {
    invalid?: boolean;
    name: string;
    multiple?: boolean;
    onStatusChange?: (status: QuestionnaireItemStatus) => void;
    required?: boolean;
};
type QuestionnaireTitleProps = UseRenderComponentProps<"legend">;
type QuestionnaireDescriptionProps = UseRenderComponentProps<"p">;
type QuestionnaireChoicesState = {
    shortcuts: QuestionnaireShortcutMode | null;
};
type QuestionnaireChoicesProps = UseRenderComponentProps<"div", QuestionnaireChoicesState>;
type QuestionnaireErrorProps = UseRenderComponentProps<"p", Pick<QuestionnaireItemState, "invalid">>;
type QuestionnaireChoiceState = {
    checked: boolean;
    disabled: boolean;
    invalid: boolean;
    shortcut: string | null;
    type: "checkbox" | "radio";
};
type QuestionnaireChoiceProps = Omit<UseRenderComponentProps<"label", QuestionnaireChoiceState>, "onChange"> & {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
};
type QuestionnaireChoiceInputProps = Omit<UseRenderComponentProps<"input", QuestionnaireChoiceState>, "checked" | "defaultChecked" | "disabled" | "name" | "onChange" | "required" | "type" | "value">;
type QuestionnaireChoiceLabelProps = UseRenderComponentProps<"span">;
type QuestionnaireChoiceShortcutState = Pick<QuestionnaireChoiceState, "shortcut">;
type QuestionnaireChoiceShortcutProps = UseRenderComponentProps<"span", QuestionnaireChoiceShortcutState>;
type QuestionnaireInputState = {
    disabled: boolean;
    filled: boolean;
    invalid: boolean;
};
type QuestionnaireInputType = "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
type QuestionnaireInputProps = Omit<UseRenderComponentProps<"input", QuestionnaireInputState>, "form" | "name" | "type"> & {
    type?: QuestionnaireInputType;
};
type QuestionnaireNavigationState = {
    disabled: boolean;
    shortcut: "Enter" | null;
    status: QuestionnaireItemStatus | null;
    visible: boolean;
};
type QuestionnairePreviousProps = UseRenderComponentProps<"button", QuestionnaireNavigationState>;
type QuestionnaireSkipProps = UseRenderComponentProps<"button", QuestionnaireNavigationState>;
type QuestionnaireNextProps = UseRenderComponentProps<"button", QuestionnaireNavigationState>;
type QuestionnaireSubmitProps = UseRenderComponentProps<"button", QuestionnaireNavigationState>;

declare function QuestionnaireRoot({ defaultItem, item, items, noValidate, onItemChange, onReset, onSubmit, ref, shortcuts, ...props }: QuestionnaireRootProps): react_jsx_runtime.JSX.Element;
declare function QuestionnaireProgress({ children, render, ...props }: QuestionnaireProgressProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireItem({ "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, children, disabled, invalid, multiple, name, onStatusChange, ref, required, ...props }: QuestionnaireItemProps): react_jsx_runtime.JSX.Element;
declare function QuestionnaireTitle({ render, ...props }: QuestionnaireTitleProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireDescription({ id, render, ...props }: QuestionnaireDescriptionProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireChoices({ render, ...props }: QuestionnaireChoicesProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireChoice({ checked, children, defaultChecked, disabled, onChange, render, value, ...props }: QuestionnaireChoiceProps): react_jsx_runtime.JSX.Element;
declare function QuestionnaireChoiceInput({ render, ...props }: QuestionnaireChoiceInputProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireChoiceLabel({ render, ...props }: QuestionnaireChoiceLabelProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireChoiceShortcut({ children, render, ...props }: QuestionnaireChoiceShortcutProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireInput({ defaultValue, disabled, onChange, ref, render, type, value, ...props }: QuestionnaireInputProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireError({ children, id, render, ...props }: QuestionnaireErrorProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnairePrevious({ children, disabled: disabledProp, onClick, render, tabIndex, type, ...props }: QuestionnairePreviousProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireSkip({ children, disabled: disabledProp, onClick, render, tabIndex, type, ...props }: QuestionnaireSkipProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireNext({ children, disabled: disabledProp, onClick, render, tabIndex, type, ...props }: QuestionnaireNextProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
declare function QuestionnaireSubmit({ children, disabled: disabledProp, render, tabIndex, type, ...props }: QuestionnaireSubmitProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;

declare const Questionnaire: {
    Root: typeof QuestionnaireRoot;
    Progress: typeof QuestionnaireProgress;
    Item: typeof QuestionnaireItem;
    Title: typeof QuestionnaireTitle;
    Description: typeof QuestionnaireDescription;
    Choices: typeof QuestionnaireChoices;
    Choice: typeof QuestionnaireChoice;
    ChoiceInput: typeof QuestionnaireChoiceInput;
    ChoiceLabel: typeof QuestionnaireChoiceLabel;
    ChoiceShortcut: typeof QuestionnaireChoiceShortcut;
    Input: typeof QuestionnaireInput;
    Error: typeof QuestionnaireError;
    Previous: typeof QuestionnairePrevious;
    Skip: typeof QuestionnaireSkip;
    Next: typeof QuestionnaireNext;
    Submit: typeof QuestionnaireSubmit;
};

export { Questionnaire, type QuestionnaireChoiceDefinition, type QuestionnaireInputType, type QuestionnaireItemDefinition, type QuestionnaireItemStatus, type QuestionnaireShortcutMode };
