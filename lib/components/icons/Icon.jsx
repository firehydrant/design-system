import React from 'react';
import PropTypes from 'prop-types';

import { AccountIcon } from './AccountIcon';
import { AlertIcon } from './AlertIcon';
import { AnalyticsFilledIcon } from './AnalyticsFilledIcon';
import { AnalyticsOutlineIcon } from './AnalyticsOutlineIcon';
import { ArrowDownIcon } from './ArrowDownIcon';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import { ArrowUpIcon } from './ArrowUpIcon';
import { AtomIcon } from './AtomIcon';
import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { ChevronLeftIcon } from './ChevronLeftIcon';
import { ChevronRightIcon } from './ChevronRightIcon';
import { ChevronUpIcon } from './ChevronUpIcon';
import { CloseIcon } from './CloseIcon';
import { DeleteIcon } from './DeleteIcon';
import { DownloadIcon } from './DownloadIcon';
import { EditIcon } from './EditIcon';
import { EmailIcon } from './EmailIcon';
import { FileIcon } from './FileIcon';
import { FilterIcon } from './FilterIcon';
import { ExternalLinkIcon } from './ExternalLinkIcon';
import { HelpOutlineIcon } from './HelpOutlineIcon';
import { HelpFilledIcon } from './HelpFilledIcon';
import { HomeFilledIcon } from './HomeFilledIcon';
import { HomeOutlineIcon } from './HomeOutlineIcon';
import { ImportIcon } from './ImportIcon';
import { IncidentResponseFilledIcon } from './IncidentResponseFilledIcon';
import { IncidentResponseOutlineIcon } from './IncidentResponseOutlineIcon';
import { IncidentsFilledIcon } from './IncidentsFilledIcon';
import { IncidentsOutlineIcon } from './IncidentsOutlineIcon';
import { InfoIcon } from './InfoIcon';
import { InfrastructureFilledIcon } from './InfrastructureFilledIcon';
import { InfrastructureOutlineIcon } from './InfrastructureOutlineIcon';
import { IntegrationsFilledIcon } from './IntegrationsFilledIcon';
import { IntegrationsOutlineIcon } from './IntegrationsOutlineIcon';
import { LockIcon } from './LockIcon';
import { MenuIcon } from './MenuIcon';
import { MinusIcon } from './MinusIcon';
import { OrganizationFilledIcon } from './OrganizationFilledIcon';
import { OrganizationOutlineIcon } from './OrganizationOutlineIcon';
import { PlusIcon } from './PlusIcon';
import { RefreshIcon } from './RefreshIcon';
import { RocketIcon } from './RocketIcon';
import { RunbooksFilledIcon } from './RunbooksFilledIcon';
import { RunbooksOutlineIcon } from './RunbooksOutlineIcon';
import { SearchIcon } from './SearchIcon';
import { SettingsIcon } from './SettingsIcon';
import { StarFilledIcon } from './StarFilledIcon';
import { StarOutlineIcon } from './StarOutlineIcon';
import { StatusPagesFilledIcon } from './StatusPagesFilledIcon';
import { StatusPagesOutlineIcon } from './StatusPagesOutlineIcon';
import { SuccessIcon } from './SuccessIcon';
import { TeamIcon } from './TeamIcon';
import { TicketIcon } from './TicketIcon';
import { UnlockIcon } from './UnlockIcon';
import { UserFilledIcon } from './UserFilledIcon';
import { UserOutlineIcon } from './UserOutlineIcon';
import { WarningIcon } from './WarningIcon';

import { colorOptions } from '../../theme/colors.theme';

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
];

export const Icon = ({ name, color, ...props }) => {
  switch (name) {
    case 'account':
      return <AccountIcon color={color} {...props} />;
    case 'alert':
      return <AlertIcon color={color} {...props} />;
    case 'analyticsFilled':
      return <AnalyticsFilledIcon color={color} {...props} />;
    case 'analyticsOutline':
      return <AnalyticsOutlineIcon color={color} {...props} />;
    case 'arrowDown':
      return <ArrowDownIcon color={color} {...props} />;
    case 'atom':
      return <AtomIcon color={color} {...props} />;
    case 'arrowLeft':
      return <ArrowLeftIcon color={color} {...props} />;
    case 'arrowRight':
      return <ArrowRightIcon color={color} {...props} />;
    case 'arrowUp':
      return <ArrowUpIcon color={color} {...props} />;
    case 'check':
      return <CheckIcon color={color} {...props} />;
    case 'chevronDown':
      return <ChevronDownIcon color={color} {...props} />;
    case 'chevronLeft':
      return <ChevronLeftIcon color={color} {...props} />;
    case 'chevronRight':
      return <ChevronRightIcon color={color} {...props} />;
    case 'chevronUp':
      return <ChevronUpIcon color={color} {...props} />;
    case 'close':
      return <CloseIcon color={color} {...props} />;
    case 'delete':
      return <DeleteIcon color={color} {...props} />;
    case 'download':
      return <DownloadIcon color={color} {...props} />;
    case 'edit':
      return <EditIcon color={color} {...props} />;
    case 'email':
      return <EmailIcon color={color} {...props} />;
    case 'externalLink':
      return <ExternalLinkIcon color={color} {...props} />;
    case 'file':
      return <FileIcon color={color} {...props} />;
    case 'filter':
      return <FilterIcon color={color} {...props} />;
    case 'helpOutline':
      return <HelpOutlineIcon color={color} {...props} />;
    case 'helpFilled':
      return <HelpFilledIcon color={color} {...props} />;
    case 'homeFilled':
      return <HomeFilledIcon color={color} {...props} />;
    case 'homeOutline':
      return <HomeOutlineIcon color={color} {...props} />;
    case 'import':
      return <ImportIcon color={color} {...props} />;
    case 'incidentResponseFilled':
      return <IncidentResponseFilledIcon color={color} {...props} />;
    case 'incidentResponseOutline':
      return <IncidentResponseOutlineIcon color={color} {...props} />;
    case 'incidentsFilled':
      return <IncidentsFilledIcon color={color} {...props} />;
    case 'incidentsOutline':
      return <IncidentsOutlineIcon color={color} {...props} />;
    case 'info':
      return <InfoIcon color={color} {...props} />;
    case 'infrastructureFilled':
      return <InfrastructureFilledIcon color={color} {...props} />;
    case 'infrastructureOutline':
      return <InfrastructureOutlineIcon color={color} {...props} />;
    case 'integrationsFilled':
      return <IntegrationsFilledIcon color={color} {...props} />;
    case 'integrationsOutline':
      return <IntegrationsOutlineIcon color={color} {...props} />;
    case 'lock':
      return <LockIcon color={color} {...props} />;
    case 'menu':
      return <MenuIcon color={color} {...props} />;
    case 'minus':
      return <MinusIcon color={color} {...props} />;
    case 'organizationFilled':
      return <OrganizationFilledIcon color={color} {...props} />;
    case 'organizationOutline':
      return <OrganizationOutlineIcon color={color} {...props} />;
    case 'plus':
      return <PlusIcon color={color} {...props} />;
    case 'refresh':
      return <RefreshIcon color={color} {...props} />;
    case 'rocket':
      return <RocketIcon color={color} {...props} />;
    case 'runbooksFilled':
      return <RunbooksFilledIcon color={color} {...props} />;
    case 'runbooksOutline':
      return <RunbooksOutlineIcon color={color} {...props} />;
    case 'settings':
      return <SettingsIcon color={color} {...props} />;
    case 'starFilled':
      return <StarFilledIcon color={color} {...props} />;
    case 'starOutline':
      return <StarOutlineIcon color={color} {...props} />;
    case 'statusPagesFilled':
      return <StatusPagesFilledIcon color={color} {...props} />;
    case 'statusPagesOutline':
      return <StatusPagesOutlineIcon color={color} {...props} />;
    case 'success':
      return <SuccessIcon color={color} {...props} />;
    case 'search':
      return <SearchIcon color={color} {...props} />;
    case 'team':
      return <TeamIcon color={color} {...props} />;
    case 'ticket':
      return <TicketIcon color={color} {...props} />;
    case 'unlock':
      return <UnlockIcon color={color} {...props} />;
    case 'userFilled':
      return <UserFilledIcon color={color} {...props} />;
    case 'userOutline':
      return <UserOutlineIcon color={color} {...props} />;
    case 'warning':
      return <WarningIcon color={color} {...props} />;
    default:
      return <InfoIcon color={color} {...props} />;
  }
};

Icon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
  name: PropTypes.oneOf(iconList),
};
