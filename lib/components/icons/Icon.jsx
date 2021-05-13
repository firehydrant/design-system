import React from 'react';
import { AccountIcon } from './AccountIcon';
import { ArrowDownIcon } from './ArrowDownIcon';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import { ArrowUpIcon } from './ArrowUpIcon';
import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { ChevronLeftIcon } from './ChevronLeftIcon';
import { ChevronRightIcon } from './ChevronRightIcon';
import { ChevronUpIcon } from './ChevronUpIcon';
import { CloseIcon } from './CloseIcon';
import { DeleteIcon } from './DeleteIcon';
import { EditIcon } from './EditIcon';
import { AlertIcon } from './AlertIcon';
import { FileIcon } from './FileIcon';
import { FilterIcon } from './FilterIcon';
import { ExternalLinkIcon } from './ExternalLinkIcon';
import { HelpIcon } from './HelpIcon';
import { ImportIcon } from './ImportIcon';
import { InfoIcon } from './InfoIcon';
import { MinusIcon } from './MinusIcon';
import { EmailIcon } from './EmailIcon';
import { PlusIcon } from './PlusIcon';
import { SearchIcon } from './SearchIcon';
import { SettingsIcon } from './SettingsIcon';
import { StarFilledIcon } from './StarFilledIcon';
import { StarOutlineIcon } from './StarOutlineIcon';
import { SuccessIcon } from './SuccessIcon';
import { RefreshIcon } from './RefreshIcon';
import { TeamIcon } from './TeamIcon';
import { WarningIcon } from './WarningIcon';

export const Icon = ({ name, isIndeterminate, isChecked, ...props }) => {
  switch (name) {
    case 'account':
      return <AccountIcon {...props} />;
    case 'alert':
      return <AlertIcon {...props} />;
    case 'arrowDown':
      return <ArrowDownIcon {...props} />;
    case 'arrowLeft':
      return <ArrowLeftIcon {...props} />;
    case 'arrowRight':
      return <ArrowRightIcon {...props} />;
    case 'arrowUp':
      return <ArrowUpIcon {...props} />;
    case 'check':
      return <CheckIcon {...props} />;
    case 'chevronDown':
      return <ChevronDownIcon {...props} />;
    case 'chevronLeft':
      return <ChevronLeftIcon {...props} />;
    case 'chevronRight':
      return <ChevronRightIcon {...props} />;
    case 'chevronUp':
      return <ChevronUpIcon {...props} />;
    case 'close':
      return <CloseIcon {...props} />;
    case 'delete':
      return <DeleteIcon {...props} />;
    case 'edit':
      return <EditIcon {...props} />;
    case 'externalLink':
      return <ExternalLinkIcon {...props} />;
    case 'file':
      return <FileIcon {...props} />;
    case 'filter':
      return <FilterIcon {...props} />;
    case 'help':
      return <HelpIcon {...props} />;
    case 'import':
      return <ImportIcon {...props} />;
    case 'info':
      return <InfoIcon {...props} />;
    case 'email':
      return <EmailIcon {...props} />;
    case 'minus':
      return <MinusIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
    case 'settings':
      return <SettingsIcon {...props} />;
    case 'starFilled':
      return <StarFilledIcon {...props} />;
    case 'starOutline':
      return <StarOutlineIcon {...props} />;
    case 'success':
      return <SuccessIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'refresh':
      return <RefreshIcon {...props} />;
    case 'team':
      return <TeamIcon {...props} />;
    case 'warning':
      return <WarningIcon {...props} />;
    default:
      return null;
  }
};
