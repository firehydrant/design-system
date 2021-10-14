import React, {useState} from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Icon, IconButton, Link } from '../../main';

const BreadcrumbsListWithDropdown = ({crumbs}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Display only first, penultimate, and last breadcrumbs
  const firstCrumb = crumbs.breadcrumbs[crumbs.ids[0]];
  const penultimateCrumb = crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 2]];
  const lastCrumb = crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 1]];

  const dropdownItemIds = crumbs.ids.slice(1, -2);

  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href={firstCrumb.url}>
          {firstCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
      </BreadcrumbItem>
      <h1>gonna put dropdown here!</h1>
      <BreadcrumbItem>
        <BreadcrumbLink href={penultimateCrumb.url}>
          {penultimateCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={lastCrumb.url} isCurrentPage>
          {lastCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
      </BreadcrumbItem>
    </>
  )
}

export function Breadcrumbs({ crumbs }) {
  const renderBreadcrumbsList = (crumbs) => {
    if (crumbs.ids) {
      if (crumbs.ids.length <= 3) {
        return (
          <>
            {crumbs.ids.map((crumbId, index) => (
              <BreadcrumbItem>
                <BreadcrumbLink key={crumbId} isCurrentPage={index === crumbs.ids.length - 1} href={crumbs.breadcrumbs[crumbId].url}>
                  {crumbs.breadcrumbs[crumbId].text.replace('_', ' ')} 
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </>
        )
      }
      if (crumbs.ids.length > 3) {
        return <BreadcrumbsListWithDropdown crumbs={crumbs} />
      }
    }
  }

  return (
    <ChakraBreadcrumb separator={<Icon name="chevronRight" />}>
      {renderBreadcrumbsList(crumbs)}
    </ChakraBreadcrumb>
  )
}
