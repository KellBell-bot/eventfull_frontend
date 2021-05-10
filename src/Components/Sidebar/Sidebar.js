import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarStyling'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            
                <SidebarMenu>
                    <SidebarLink to='about' isOpen={isOpen} >About</SidebarLink>
                    <SidebarLink to='discover' isOpen={isOpen} >Discover</SidebarLink>
                    <SidebarLink to='signup' isOpen={isOpen} >Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login' isOpen={isOpen}>Sign In</SidebarRoute>
                </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default SideBar
