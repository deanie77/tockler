import {
    AiOutlineAreaChart,
    AiOutlineBars,
    AiOutlineQuestionCircle,
    AiOutlineSearch,
    AiOutlineSetting,
    AiOutlineTeam,
} from 'react-icons/ai';

import { Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Header } from '../Header/Header';
import { MenuItem } from '../Header/MenuItem';

export const HeaderMenu = () => {
    const { user } = useContext(AuthContext);
    return (
        <Header brandLinkProps={{ to: '/app/timeline', as: RouterLink }}>
            <MenuItem to="/app/timeline" icon={<AiOutlineBars />} title="Timeline" />
            <MenuItem to="/app/summary" icon={<AiOutlineAreaChart />} title="Summary" />
            <MenuItem to="/app/search" icon={<AiOutlineSearch />} title="Search" />
            {user?.role === 'head' && (
                <MenuItem to="/app/department" icon={<AiOutlineTeam />} title="Dashboard" />
            )}
            <MenuItem to="/app/settings" icon={<AiOutlineSetting />} title="Settings" />
            <MenuItem to="/app/support" icon={<AiOutlineQuestionCircle />} title="Support" />
            <Box flex="1" />

            <Box>
                <ColorModeSwitcher />
            </Box>
        </Header>
    );
};
