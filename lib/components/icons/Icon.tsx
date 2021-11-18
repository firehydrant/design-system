import React from 'react';
import { IconProps as ChakraIconProps } from '@chakra-ui/react';
import * as Icons from './Icons';

export const iconList = [
  'account',
  'alert',
  'analyticsFilled',
  'analyticsOutline',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'atom',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'close',
  'delete',
  'download',
  'edit',
  'email',
  'externalLink',
  'file',
  'filter',
  'helpFilled',
  'helpOutline',
  'homeFilled',
  'homeOutline',
  'import',
  'incidentResponseFilled',
  'incidentResponseOutline',
  'incidentsFilled',
  'incidentsOutline',
  'info',
  'infrastructureFilled',
  'infrastructureOutline',
  'integrationsFilled',
  'integrationsOutline',
  'lock',
  'menu',
  'minus',
  'organizationFilled',
  'organizationOutline',
  'plus',
  'refresh',
  'rocket',
  'runbooksFilled',
  'runbooksOutline',
  'search',
  'settings',
  'starFilled',
  'starOutline',
  'statusPagesFilled',
  'statusPagesOutline',
  'success',
  'team',
  'ticket',
  'unlock',
  'userFilled',
  'userOutline',
  'warning',
] as const;

type IconList = typeof iconList[number];

interface IconProps extends ChakraIconProps {
  name: IconList;
}

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case 'account':
      return <Icons.AccountIcon {...props} />;
    case 'alert':
      return <Icons.AlertIcon {...props} />;
    case 'analyticsFilled':
      return <Icons.AnalyticsFilledIcon {...props} />;
    case 'analyticsOutline':
      return <Icons.AnalyticsOutlineIcon {...props} />;
    case 'arrowDown':
      return <Icons.ArrowDownIcon {...props} />;
    case 'atom':
      return <Icons.AtomIcon {...props} />;
    case 'arrowLeft':
      return <Icons.ArrowLeftIcon {...props} />;
    case 'arrowRight':
      return <Icons.ArrowRightIcon {...props} />;
    case 'arrowUp':
      return <Icons.ArrowUpIcon {...props} />;
    case 'check':
      return <Icons.CheckIcon {...props} />;
    case 'chevronDown':
      return <Icons.ChevronDownIcon {...props} />;
    case 'chevronLeft':
      return <Icons.ChevronLeftIcon {...props} />;
    case 'chevronRight':
      return <Icons.ChevronRightIcon {...props} />;
    case 'chevronUp':
      return <Icons.ChevronUpIcon {...props} />;
    case 'close':
      return <Icons.CloseIcon {...props} />;
    case 'delete':
      return <Icons.DeleteIcon {...props} />;
    case 'download':
      return <Icons.DownloadIcon {...props} />;
    case 'edit':
      return <Icons.EditIcon {...props} />;
    case 'email':
      return <Icons.EmailIcon {...props} />;
    case 'externalLink':
      return <Icons.ExternalLinkIcon {...props} />;
    case 'file':
      return <Icons.FileIcon {...props} />;
    case 'filter':
      return <Icons.FilterIcon {...props} />;
    case 'helpOutline':
      return <Icons.HelpOutlineIcon {...props} />;
    case 'helpFilled':
      return <Icons.HelpFilledIcon {...props} />;
    case 'homeFilled':
      return <Icons.HomeFilledIcon {...props} />;
    case 'homeOutline':
      return <Icons.HomeOutlineIcon {...props} />;
    case 'import':
      return <Icons.ImportIcon {...props} />;
    case 'incidentResponseFilled':
      return <Icons.IncidentResponseFilledIcon {...props} />;
    case 'incidentResponseOutline':
      return <Icons.IncidentResponseOutlineIcon {...props} />;
    case 'incidentsFilled':
      return <Icons.IncidentsFilledIcon {...props} />;
    case 'incidentsOutline':
      return <Icons.IncidentsOutlineIcon {...props} />;
    case 'info':
      return <Icons.InfoIcon {...props} />;
    case 'infrastructureFilled':
      return <Icons.InfrastructureFilledIcon {...props} />;
    case 'infrastructureOutline':
      return <Icons.InfrastructureOutlineIcon {...props} />;
    case 'integrationsFilled':
      return <Icons.IntegrationsFilledIcon {...props} />;
    case 'integrationsOutline':
      return <Icons.IntegrationsOutlineIcon {...props} />;
    case 'lock':
      return <Icons.LockIcon {...props} />;
    case 'menu':
      return <Icons.MenuIcon {...props} />;
    case 'minus':
      return <Icons.MinusIcon {...props} />;
    case 'organizationFilled':
      return <Icons.OrganizationFilledIcon {...props} />;
    case 'organizationOutline':
      return <Icons.OrganizationOutlineIcon {...props} />;
    case 'plus':
      return <Icons.PlusIcon {...props} />;
    case 'refresh':
      return <Icons.RefreshIcon {...props} />;
    case 'rocket':
      return <Icons.RocketIcon {...props} />;
    case 'runbooksFilled':
      return <Icons.RunbooksFilledIcon {...props} />;
    case 'runbooksOutline':
      return <Icons.RunbooksOutlineIcon {...props} />;
    case 'settings':
      return <Icons.SettingsIcon {...props} />;
    case 'starFilled':
      return <Icons.StarFilledIcon {...props} />;
    case 'starOutline':
      return <Icons.StarOutlineIcon {...props} />;
    case 'statusPagesFilled':
      return <Icons.StatusPagesFilledIcon {...props} />;
    case 'statusPagesOutline':
      return <Icons.StatusPagesOutlineIcon {...props} />;
    case 'success':
      return <Icons.SuccessIcon {...props} />;
    case 'search':
      return <Icons.SearchIcon {...props} />;
    case 'team':
      return <Icons.TeamIcon {...props} />;
    case 'ticket':
      return <Icons.TicketIcon {...props} />;
    case 'unlock':
      return <Icons.UnlockIcon {...props} />;
    case 'userFilled':
      return <Icons.UserFilledIcon {...props} />;
    case 'userOutline':
      return <Icons.UserOutlineIcon {...props} />;
    case 'warning':
      return <Icons.WarningIcon {...props} />;
    default:
      return <Icons.InfoIcon {...props} />;
  }
};
