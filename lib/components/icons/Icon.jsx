import React from 'react';
import { ArrowDownIcon } from './ArrowDownIcon';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import { ArrowUpIcon } from './ArrowUpIcon';
import { BrokenLinkIcon } from './BrokenLinkIcon';
import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { ChevronLeftIcon } from './ChevronLeftIcon';
import { ChevronRightIcon } from './ChevronRightIcon';
import { ChevronUpIcon } from './ChevronUpIcon';
import { CloseIcon } from './CloseIcon';
import { DeleteIcon } from './DeleteIcon';
import { EditIcon } from './EditIcon';
import { ErrorIcon } from './ErrorIcon';
import { FileIcon } from './FileIcon';
import { FilterIcon } from './FilterIcon';
import { ExternalLinkIcon } from './ExternalLinkIcon';
import { HelpIcon } from './HelpIcon';
import { InfoIcon } from './InfoIcon';
import { MinusIcon } from './MinusIcon';
import { MailIcon } from './MailIcon';
import { PlusIcon } from './PlusIcon';
import { SearchIcon } from './SearchIcon';
import { SettingsIcon } from './SettingsIcon';
import { StarFilledIcon } from './StarFilledIcon';
import { StarOutlineIcon } from './StarOutlineIcon';
import { SuccessIcon } from './SuccessIcon';
import { WarningIcon } from './WarningIcon';

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'arrowDown':
      return <ArrowDownIcon {...props} />;
      break;
    case 'arrowLeft':
      return <ArrowLeftIcon {...props} />;
      break;
    case 'arrowRight':
      return <ArrowRightIcon {...props} />;
      break;
    case 'arrowUp':
      return <ArrowUpIcon {...props} />;
      break;
    case 'brokenLink':
      return <BrokenLinkIcon {...props} />;
      break;
    case 'check':
      return <CheckIcon {...props} />;
      break;
    case 'chevronDown':
      return <ChevronDownIcon {...props} />;
      break;
    case 'chevronLeft':
      return <ChevronLeftIcon {...props} />;
      break;
    case 'chevronRight':
      return <ChevronRightIcon {...props} />;
      break;
    case 'chevronUp':
      return <ChevronUpIcon {...props} />;
      break;
    case 'close':
      return <CloseIcon {...props} />;
      break;
    case 'delete':
      return <DeleteIcon {...props} />;
      break;
    case 'edit':
      return <EditIcon {...props} />;
      break;
    case 'error':
      return <ErrorIcon {...props} />;
      break;
    case 'externalLink':
      return <ExternalLinkIcon {...props} />;
      break;
    case 'file':
      return <FileIcon {...props} />;
      break;
    case 'filter':
      return <FilterIcon {...props} />;
      break;
    case 'help':
      return <HelpIcon {...props} />;
      break;
    case 'info':
      return <InfoIcon {...props} />;
      break;
    case 'mail':
      return <MailIcon {...props} />;
      break;
    case 'plus':
      return <PlusIcon {...props} />;
      break;
    case 'settings':
      return <SettingsIcon {...props} />;
      break;
    case 'starFilled':
      return <StarFilledIcon {...props} />;
      break;
    case 'starOutline':
      return <StarOutlineIcon {...props} />;
      break;
    case 'success':
      return <SuccessIcon {...props} />;
      break;
    case 'warning':
      return <WarningIcon {...props} />;
      break;
    default:
      return null;
      break;
  }
};
