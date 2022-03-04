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
import { ExternalLinkIcon } from './ExternalLinkIcon';
import { FileIcon } from './FileIcon';
import { FilterIcon } from './FilterIcon';
import { HelpFilledIcon } from './HelpFilledIcon';
import { HelpOutlineIcon } from './HelpOutlineIcon';
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
import { RetrospectivesIcon } from './RetrospectivesIcon';
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
  'retrospectives',
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

// eslint-disable-next-line no-unused-vars
export const Icon = ({ name, isIndeterminate, isChecked, ...props }) => {
  switch (name) {
    case 'account':
      return <AccountIcon {...props} />;
    case 'alert':
      return <AlertIcon {...props} />;
    case 'analyticsFilled':
      return <AnalyticsFilledIcon {...props} />;
    case 'analyticsOutline':
      return <AnalyticsOutlineIcon {...props} />;
    case 'arrowDown':
      return <ArrowDownIcon {...props} />;
    case 'atom':
      return <AtomIcon {...props} />;
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
    case 'download':
      return <DownloadIcon {...props} />;
    case 'edit':
      return <EditIcon {...props} />;
    case 'email':
      return <EmailIcon {...props} />;
    case 'externalLink':
      return <ExternalLinkIcon {...props} />;
    case 'file':
      return <FileIcon {...props} />;
    case 'filter':
      return <FilterIcon {...props} />;
    case 'helpOutline':
      return <HelpOutlineIcon {...props} />;
    case 'helpFilled':
      return <HelpFilledIcon {...props} />;
    case 'homeFilled':
      return <HomeFilledIcon {...props} />;
    case 'homeOutline':
      return <HomeOutlineIcon {...props} />;
    case 'import':
      return <ImportIcon {...props} />;
    case 'incidentResponseFilled':
      return <IncidentResponseFilledIcon {...props} />;
    case 'incidentResponseOutline':
      return <IncidentResponseOutlineIcon {...props} />;
    case 'incidentsFilled':
      return <IncidentsFilledIcon {...props} />;
    case 'incidentsOutline':
      return <IncidentsOutlineIcon {...props} />;
    case 'info':
      return <InfoIcon {...props} />;
    case 'infrastructureFilled':
      return <InfrastructureFilledIcon {...props} />;
    case 'infrastructureOutline':
      return <InfrastructureOutlineIcon {...props} />;
    case 'integrationsFilled':
      return <IntegrationsFilledIcon {...props} />;
    case 'integrationsOutline':
      return <IntegrationsOutlineIcon {...props} />;
    case 'lock':
      return <LockIcon {...props} />;
    case 'menu':
      return <MenuIcon {...props} />;
    case 'minus':
      return <MinusIcon {...props} />;
    case 'organizationFilled':
      return <OrganizationFilledIcon {...props} />;
    case 'organizationOutline':
      return <OrganizationOutlineIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
    case 'refresh':
      return <RefreshIcon {...props} />;
    case 'retrospectives':
      return <RetrospectivesIcon {...props} />;
    case 'rocket':
      return <RocketIcon {...props} />;
    case 'runbooksFilled':
      return <RunbooksFilledIcon {...props} />;
    case 'runbooksOutline':
      return <RunbooksOutlineIcon {...props} />;
    case 'settings':
      return <SettingsIcon {...props} />;
    case 'starFilled':
      return <StarFilledIcon {...props} />;
    case 'starOutline':
      return <StarOutlineIcon {...props} />;
    case 'statusPagesFilled':
      return <StatusPagesFilledIcon {...props} />;
    case 'statusPagesOutline':
      return <StatusPagesOutlineIcon {...props} />;
    case 'success':
      return <SuccessIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'team':
      return <TeamIcon {...props} />;
    case 'ticket':
      return <TicketIcon {...props} />;
    case 'unlock':
      return <UnlockIcon {...props} />;
    case 'userFilled':
      return <UserFilledIcon {...props} />;
    case 'userOutline':
      return <UserOutlineIcon {...props} />;
    case 'warning':
      return <WarningIcon {...props} />;
    default:
      return <InfoIcon {...props} />;
  }
};

Icon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
  name: PropTypes.oneOf(iconList),
};
