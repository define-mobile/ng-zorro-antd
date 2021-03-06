import { OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type NzSwitchSizeType = 'default' | 'small';
export declare class NzSwitchComponent implements OnInit, ControlValueAccessor {
    private _disabled;
    private _size;
    private _loading;
    private _control;
    private _checkedChildren;
    private _unCheckedChildren;
    prefixCls: string;
    classMap: any;
    checked: boolean;
    isCheckedChildrenString: boolean;
    isUnCheckedChildrenString: boolean;
    private switchElement;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    nzControl: boolean;
    nzCheckedChildren: string | TemplateRef<void>;
    nzUnCheckedChildren: string | TemplateRef<void>;
    nzSize: NzSwitchSizeType;
    nzLoading: boolean;
    nzDisabled: boolean;
    onClick(e: MouseEvent): void;
    updateValue(value: boolean, emit: boolean): void;
    setClassMap(): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    blur(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
